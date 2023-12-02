import { useState } from 'react';

export default function WhatWeDo() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <div className="flex mx-80 mt-32 gap-4">
                <div className="w-1/2 h-auto">
                    <h1 className="text-[36px] font-bold">What</h1>
                    <h1 className="text-[36px] font-bold">We Do ?</h1>
                    <h2 className="mt-8 text-gray-500 text-[24px] font-medium">
                        <ul>
                            <li onClick={() => handleItemClick('Mobile Application')}>Mobile Application</li>
                            <li onClick={() => handleItemClick('Web Application')}>Web Application</li>
                        </ul>
                    </h2>
                </div>
                <div className="w-1/2 flex h-auto justify-center">
                    {selectedItem && <WhatWeDoDesc selectedItem={selectedItem} />}
                </div>
            </div>
        </>
    );
}

export function WhatWeDoDesc({ selectedItem }) {

    const whatWeDoData = [
        {
            judul: "Mobile Application",
            deskripsi: "Building mobile applications is never easy. P2P lending app? Logistic App? E-Commerce App? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
            image: "../src/assets/mobile_application.png"
        },
        {
            judul: "Web Application",
            deskripsi: "Building web applications is never easy. E-Commerce Platform? CRM System? Social Media Application? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your web applications idea so that you can focus on the core business. Leave the server-side scripting to us.",
            image: "../src/assets/web_application.png"
        }
    ];

    return (
        <>
            {whatWeDoData.map((item, index) => (
                <div key={index} className="flex mx-80 mt-16 p-4 px-16 gap-4 rounded-full relative overflow-hidden">
                    <div className="w-1/2 h-auto relative">
                        <img src={item.image} alt={item.judul} />
                        <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center">
                            <h1 className="text-[36px] font-bold text-right mr-4">{item.judul}</h1>
                            <h2 className="mt-4 text-white text-[12px] font-normal mx-4 text-right">{item.deskripsi}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
