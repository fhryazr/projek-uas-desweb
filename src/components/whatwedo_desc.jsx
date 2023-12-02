export default function WhatWeDoDesc({ selectedItem }) {
    const mobileApplicationData = {
        judul: "Mobile Application",
        deskripsi: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
        image: "../src/assets/mobile_application.png"
    };

    const webApplicationData = {
        judul: "Web Application",
        deskripsi: "Developing web applications presents its challenges. E-commerce platforms? CRM systems? Social media applications? We've tackled them all. With precision and speed, we've mastered the art of web application development. Our forte lies in enhancing your web application concepts, allowing you to concentrate on your core business. Let us handle the intricate scripting while you focus on your goals.",
        image: "../src/assets/web_application.png"
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 gap-6 lg:grid-cols-2 mt-16`}>
                    {selectedItem === 'Mobile Application' && (
                        <div className="w-full lg:h-auto relative">
                            <img src={mobileApplicationData.image} alt={mobileApplicationData.judul} className="w-full h-auto" />
                            <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center">
                                <h1 className="text-[36px] font-bold text-right mr-4">{mobileApplicationData.judul}</h1>
                                <h2 className="mt-4 text-white text-[12px] font-normal mx-4 text-right">{mobileApplicationData.deskripsi}</h2>
                            </div>
                        </div>
                    )}

                    {selectedItem === 'Web Application' && (
                        <div className="w-full lg:h-auto relative">
                            <img src={webApplicationData.image} alt={webApplicationData.judul} className="w-full h-auto" />
                            <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center">
                                <h1 className="text-[36px] font-bold text-right mr-4">{webApplicationData.judul}</h1>
                                <h2 className="mt-4 text-white text-[12px] font-normal mx-4 text-right">{webApplicationData.deskripsi}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}