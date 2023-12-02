import { useState } from "react";
import { useEffect } from "react";

function Work() {
  const [hoveredBox, setHoveredBox] = useState('Discuss');
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleBoxHover = (box) => {
    setHoveredBox(box);
    setIsTextVisible(false);

    // Set isTextVisible back to false after 0.3 seconds
    setTimeout(() => {
      setIsTextVisible(true);
    }, 200);
  };

  useEffect(() => {
    // Change hoveredBox every 3 seconds
    const intervalId = setInterval(() => {
      switch (hoveredBox) {
        case "Discuss":
          setHoveredBox("Plan");
          break;
        case "Plan":
          setHoveredBox("Coding");
          break;
        case "Coding":
          setHoveredBox("Discuss");
          break;
        default:
          break;
      }
    }, 3000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [hoveredBox]);


  return (
    <>
      <div
        id="workSection"
        className="h-[100vh] flex justify-center items-center">
        <div className="Work flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-[5rem] px-5">
          <div className="Box grid grid-cols-2">
            <div className="w-[50%] h-1 bg-black my-auto ml-[4rem] lg:ml-[6.3rem]"></div>
            <div
              className="Box-1 w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bg-gradient-to-b from-green-300 to-yellow-400 px-2 lg:px-5"
              onMouseEnter={() => handleBoxHover("Discuss")}
              // onMouseLeave={() => handleBoxHover(null)}
            >
              <p className="pt-2 lg:pt-5 lg:text-xl">Discuss</p>
              <p className="num pl-[3.5rem] lg:pl-[5rem] pt-8 lg:pt-[4rem] text-5xl lg:text-8xl font-bold text-neutral-200 opacity-80">
                01
              </p>
            </div>
            <div
              className="Box-2 w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] px-2 lg:px-5"
              onMouseEnter={() => handleBoxHover("Plan")}
              // onMouseLeave={() => handleBoxHover(null)}
            >
              <p className="pt-2 lg:pt-5 lg:text-xl">Plan</p>
              <p className="num pl-11 lg:pl-[3.5rem] pt-8 lg:pt-[4rem] text-5xl lg:text-8xl font-bold text-neutral-300 opacity-80 transition duration-500">
                02
              </p>
            </div>
            <div
              className="Box-3 w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] px-2 lg:px-5"
              onMouseEnter={() => handleBoxHover("Coding")}
              // onMouseLeave={() => handleBoxHover(null)}
            >
              <p className="pt-2 lg:pt-5 lg:text-xl">Coding</p>
              <p className="num pl-11 lg:pl-[3.5rem] pt-8 lg:pt-[4rem] text-5xl lg:text-8xl font-bold text-neutral-300 opacity-70">
                03
              </p>
            </div>
          </div>
          <div className="flex w-[80vw] lg:w-[40vw] flex-col gap-4">
            <h1 className="text-4xl text-white lg:text-[3.6rem] font-semibold lg:leading-[72px]">
              How <br /> We Works?
            </h1>
            {hoveredBox === "Discuss" && (
              <p
                className={`TeksChange text-white text-xl md:text-2xl font-medium mb-3 md:mb-11 lg:mb-3 ${
                  isTextVisible
                    ? "opacity-100 transition-opacity ease-in-out duration-600"
                    : "opacity-0"
                }`}>
                Let&apos;s discuss what projects you have in mind
              </p>
            )}
            {hoveredBox === "Plan" && (
              <p className={`TeksChange text-white text-xl md:text-2xl font-medium mb-3 ${
                isTextVisible
                  ? "opacity-100 transition-opacity ease-in-out duration-600"
                  : "opacity-0 transition-opacity ease-in-out duration-600"
              }`}>
                Planning the details of the projects you have in mind.
              </p>
            )}
            {hoveredBox === "Coding" && (
              <p className={`TeksChange text-white text-xl md:text-2xl font-medium mb-3 ${
                isTextVisible
                  ? "opacity-100 transition-opacity ease-in-out duration-600"
                  : "opacity-0 transition-opacity ease-in-out duration-600"
              }`}>
                Let&apos;s dive into coding and create amazing solutions
              </p>
            )}
            <button className="bg-black text-white h-[3rem] w-[10rem] hover:bg-white hover:border-[1px] border-black hover:text-black transition duration-300 ">
              More
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          :root {
            --gradient: linear-gradient(180deg, #E5E5E5, #FFF, #9FD685, #F9DD03);
          }
          .Work {
            position: relative;
            overflow: hidden;
          }
          .Work::before {
            content: '';
            position: fixed;
            filter: brightness(0.4);
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url('/work-img.svg');
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.9;
            z-index: -1;
          }
          .Box-1, .Box-2, .Box-3 {
            background-image: var(--gradient);
            background-position: top;
            background-size: 200px 600px;
            cursor: pointer;
            overflow: hidden; 
            transition: background .5s ease-in-out;
          }
          .Box-1 {
            background-position: ${hoveredBox === "Discuss"
              ? "bottom"
              : ''
            };
            .num {
              color: ${hoveredBox === "Discuss" ? "white" : ""};
              opacity: ${hoveredBox === "Discuss" ? "1" : ""};
            }
          }

          .Box-2 {
            background-position: ${hoveredBox === "Plan"
              ? "bottom"
              : ''
            };
            .num {
              color: ${hoveredBox === "Plan" ? "white" : ""};
              opacity: ${hoveredBox === "Plan" ? "1" : ""};
            }
          }
          .Box-3 {
            background-position: ${hoveredBox === "Coding"
              ? "bottom"
              : ''
            };
            .num {
              color: ${hoveredBox === "Coding" ? "white" : ""};
              opacity: ${hoveredBox === "Coding" ? "1" : ""};
            }
          }
          .Box-1:hover, .Box-2:hover, .Box-3:hover {
            background-position: bottom;
            .num {
              color: white;
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

export default Work;
