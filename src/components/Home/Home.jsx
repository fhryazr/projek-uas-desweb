import { useState } from "react";
import Header from "./Header";
import HowWeWork from "./HowWeWork";

function Home() {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <>
      <div className="Home flex flex-col md:flex-row justify-end md:justify-start items-center h-[100vh] bg-no-repeat bg-contain bg-fixed">
        <Header />
      </div>
      <HowWeWork setIsBtnHovered={setIsBtnHovered} isBtnHovered={isBtnHovered} />

      <style>
      {`
        .Teks {
          @media (min-width: 768px) {
            width: ${isBtnHovered ? "50vw" : ""};
          }
        }

        .Arrow {
          transition: all 0.3s;
          background-color: ${isBtnHovered ? "transparent" : ""};
          color: ${isBtnHovered ? "black" : ""};
        }

        .Home {
          background-image: url('/hero-img.svg');
          @media (max-width: 425px) {
            background-position: center 80px;
          }
        
          @media (min-width: 768px) {
            background-position: right;
          }
        
          @media (min-width: 1024px) {
            background-position: right;
          }
        };
      `}
    </style>
    </>
  );
}

export default Home;
