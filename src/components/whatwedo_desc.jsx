import React, { useState } from 'react';

export default function WhatWeDoDesc({ handleItemClick }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const mobileApplicationData = {
        judul: "Mobile Application",
        deskripsi: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
        image: "../src/assets/mobile_application.png"
    };

    const webApplicationData = {
        judul: "Web Application",
        deskripsi: "Building web applications is never easy. E-Commerce Platform? CRM System? Social Media Application? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your web applications idea so that you can focus on the core business. Leave the server-side scripting to us.",
        image: "../src/assets/web_application.png"
    };

    const handleClick = (item) => {
        setSelectedItem(item);
        handleItemClick(item);
    };

    return (
        <div className="flex flex-col lg:flex-row mx-6 lg:mx-80 mt-6 lg:mt-16 gap-4">
            <div className="w-full lg:w-1/2 h-auto flex justify-start items-center">
                {selectedItem === 'Mobile Application' && (
                    <div className="w-full lg:w-4/5 h-auto relative">
                        <img src={mobileApplicationData.image} alt={mobileApplicationData.judul} className="w-full h-auto" />
                        <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center lg:text-right p-4">
                            <h1 className="text-[24px] lg:text-[36px] font-bold">{mobileApplicationData.judul}</h1>
                            <h2 className="mt-2 lg:mt-4 text-white text-[10px] lg:text-[12px] font-normal mx-4 lg:text-right">{mobileApplicationData.deskripsi}</h2>
                        </div>
                    </div>
                )}

                {selectedItem === 'Web Application' && (
                    <div className="w-full lg:w-4/5 h-auto relative">
                        <img src={webApplicationData.image} alt={webApplicationData.judul} className="w-full h-auto" />
                        <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center lg:text-right p-4">
                            <h1 className="text-[24px] lg:text-[36px] font-bold">{webApplicationData.judul}</h1>
                            <h2 className="mt-2 lg:mt-4 text-white text-[10px] lg:text-[12px] font-normal mx-4 lg:text-right">{webApplicationData.deskripsi}</h2>
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl text-black lg:text-[3.6rem] font-bold lg:leading-[72px]">
            What <br /> We Do?
            </h1>
                <h2 className="mt-4 text-gray-500 text-[16px] lg:text-[24px] font-medium text-center lg:text-left">
                    <ul>
                        <li onClick={() => handleClick('Mobile Application')} className="cursor-pointer">Mobile Application</li>
                        <li onClick={() => handleClick('Web Application')} className="cursor-pointer">Web Application</li>
                    </ul>
                </h2>
            </div>
        </div>
    );
}
