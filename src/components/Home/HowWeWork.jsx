/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const HowWeWork = ({ setIsBtnHovered }) => {
  const handleButtonClick = () => {
    const workSection = document.getElementById('workSection');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex md:justify-center md:pl-[11.6rem] md:-mt-[12rem] md:w-full">
      <div className="Arrow text-xl text-white bg-black px-5 py-3 duration-300">
        <FaArrowRightLong />
      </div>
      <>
        <button
          className="Btn-hover transition-all ease-in-out duration-300 bg-yellow-400 hover:bg-black items-center text-black hover:text-white font-semibold text-xl px-10 py-2"
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          onClick={handleButtonClick}>
          How We Works
        </button>
      </>
    </div>
  );
};

export default HowWeWork;
