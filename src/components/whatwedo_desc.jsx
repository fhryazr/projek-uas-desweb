/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WhatWeDoDesc({ handleItemClick }) {
  const [selectedItem, setSelectedItem] = useState("Mobile Application");

  const mobileApplicationData = {
    judul: "Mobile Application",
    deskripsi:
      "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
    image: "../src/assets/mobile_application.png",
  };

  const webApplicationData = {
    judul: "Web Application",
    deskripsi:
      "Building web applications is never easy. E-Commerce Platform? CRM System? Social Media Application? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your web applications idea so that you can focus on the core business. Leave the server-side scripting to us.",
    image: "../src/assets/web_application.png",
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    handleItemClick(item);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedItem((prevSelectedItem) =>
        prevSelectedItem === "Mobile Application"
          ? "Web Application"
          : "Mobile Application"
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col md:flex-row mx-1 md:mx-4 mt-6 md:mt-16 gap-4 md:gap-20 mb-[5rem]">
      <div className="w-full lg:w-1/2 h-auto flex justify-start items-center">
        {selectedItem === "Mobile Application" && (
          <motion.div
            className="w-full h-auto relative flex flex-col justify-center items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <img
              src={mobileApplicationData.image}
              alt={mobileApplicationData.judul}
              className="w-full h-auto lg:w-auto"
            />
            <div className="absolute top-0 right-0 w-3/4 lg:w-2/4 h-full flex flex-col justify-center items-end text-white text-end lg:text-right p-1">
              <h1 className="text-[2vw] lg:text-[42px] font-bold">
                {mobileApplicationData.judul}
              </h1>
              <h2 className="mt-2 lg:mt-4 text-[1.3vw] lg:text-[12px] font-normal mx-1 lg:text-right">
                {mobileApplicationData.deskripsi}
              </h2>
            </div>
          </motion.div>
        )}

        {selectedItem === "Web Application" && (
          <motion.div
            className="w-full h-auto relative flex flex-col justify-center items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <img
              src={webApplicationData.image}
              alt={webApplicationData.judul}
              className="w-full h-auto lg:w-auto"
            />
            <div className="absolute top-0 right-0 w-3/4 lg:w-2/4 h-full flex flex-col justify-center items-end text-white text-end lg:text-right p-1">
              <h1 className="text-[2vw] lg:text-[46px] font-bold">
                {webApplicationData.judul}
              </h1>
              <h2 className="mt-2 lg:mt-4 text-[1.3vw] lg:text-[12px] font-normal mx-1 lg:text-right">
                {webApplicationData.deskripsi}
              </h2>
            </div>
          </motion.div>
        )}
      </div>

      <div className="w-full lg:w-1/2 h-auto flex flex-col justify-start items-start lg:items-start">
        <h1 className="text-[8vw] lg:text-[4.5rem] font-bold">
          What <br /> We Do?
        </h1>
        <h2 className="mt-4 text-gray-500 text-[3vw] lg:text-[24px] font-medium text-start lg:text-left">
          <ul>
            <li
              onClick={() => handleClick("Mobile Application")}
              className="cursor-pointer">
              Mobile Application
            </li>
            <li
              onClick={() => handleClick("Web Application")}
              className="cursor-pointer">
              Web Application
            </li>
          </ul>
        </h2>
      </div>
    </div>
  );
}
