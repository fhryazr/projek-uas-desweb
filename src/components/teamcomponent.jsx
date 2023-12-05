/* eslint-disable react/prop-types */
import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

// Group the members into sets of three
const teamMemberSets = [
  [
    { name: "Alex Lein", title: "COO", imageSrc: img1 },
    { name: "Rendy Miller", title: "CEO/CTO", imageSrc: img2 },
    { name: "Trisca Laghari", title: "CFO", imageSrc: img3 },
  ],
  [
    { name: "Olivia Wilson", title: "CMO", imageSrc: img4 },
    { name: "Aaliyah Igwe", title: "Head of Operations", imageSrc: img5 },
    { name: "Jonathan Lund", title: "Chief Legal Officer", imageSrc: img6 },
  ],
  [
    { name: "Mariska", title: "Head of Costumer Services", imageSrc: img7 },
    { name: "Ryan Scott", title: "Head of Product", imageSrc: img8 },
    { name: "Fiona Atkins", title: "Head of Marketing", imageSrc: img9 },
  ],
  // Add more sets as needed
];

const TeamMember = ({ name, title, imageSrc, isMiddle }) => {
  // Kelas responsif untuk ukuran gambar
  const imageSizeClass = isMiddle
    ? "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
    : "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32";
  const containerPadding = isMiddle ? "p-2 md:p-4 lg:p-6" : "p-1 md:p-2 lg:p-4";
  const containerMarginBottom = isMiddle
    ? "mb-4 md:mb-6 lg:mb-8"
    : "mb-2 md:mb-4 lg:mb-6";

  return (
    <div
      className={`${containerPadding} ${containerMarginBottom} text-center transition-all duration-300`}>
      <div className={`${imageSizeClass} mx-auto`}>
        <img
          className={`rounded-full border-4 ${
            isMiddle ? "border-yellow-300" : "border-purple-300"
          }`}
          src={imageSrc}
          alt={name}
        />
      </div>
      <div className="text-xs md:text-sm lg:text-base font-semibold">
        {name}
      </div>
      <div className="text-xs md:text-sm text-gray-600">{title}</div>
    </div>
  );
};

const TeamComponent = () => {
  const [activeSetIndex, setActiveSetIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveSetIndex(index);
  };

  const sliderStyle = {
    width: `${teamMemberSets.length * 100}%`,
    transform: `translateX(-${
      (activeSetIndex * 100) / teamMemberSets.length
    }%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <>
      <div className="bg-white py-8">
        <div className="w-[95vw] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold uppercase">Our Team</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex" style={sliderStyle}>
              {teamMemberSets.map((set, setIndex) => (
                <div
                  key={setIndex}
                  className="flex justify-center gap-2  md:space-x-8"
                  style={{ width: "100%" }}>
                  {set.map((member, memberIndex) => (
                    <TeamMember
                      key={memberIndex}
                      name={member.name}
                      title={member.title}
                      imageSrc={member.imageSrc}
                      isMiddle={memberIndex === 1}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {teamMemberSets.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === activeSetIndex ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComponent;
