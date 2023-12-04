// import { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export default function Customers() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-20 xl:mx-80 gap-4 h-screen pt-[4rem]">
        <div className="w-[60vw] lg:w-[40vw] xl:w-1/2 mb-5">
          <h1 className="text-2xl md:text-[36px] font-bold">
            Our Customers are our biggest fans
          </h1>
          <h2 className="mt-4 md:mt-8 text-gray-500 text-xl md:text-[24px] font-medium">
            We have helped startups around the globe as well as fortune 500
            companies
          </h2>
          <Link to="/customers/descriptions">
            <button className="mt-4 md:mt-8 text-lime-500 font-medium">
              See All
            </button>
          </Link>
        </div>
        <div className="w-[250px] md:w-1/2 flex justify-center">
          <img src="..\src\assets\customers.jpg" alt="Deskripsi gambar" />
        </div>
      </div>
      <Footer />
    </>
  );
}
