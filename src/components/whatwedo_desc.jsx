export default function WhatWeDoDesc({ selectedItem }) {
    // Tambahkan data informasi ke masing-masing aplikasi di sini

    const mobileApplicationData = {
        judul: "Mobile Application",
        deskripsi: "Informasi mengenai Mobile Application",
        image: "../src/assets/mobile_application.png"
    };

    const webApplicationData = {
        judul: "Web Application",
        deskripsi: "Informasi mengenai Web Application",
        image: "../src/assets/web_application.png"
    };

    return (
        <>
            <div className={`flex mx-80 mt-16 p-4 px-16 gap-4 rounded-full relative overflow-hidden transition-container ${!selectedItem ? 'hide' : ''}`}>
                {selectedItem === 'Mobile Application' && (
                    <div className="w-1/2 h-auto relative">
                        <img src={mobileApplicationData.image} alt={mobileApplicationData.judul} />
                        <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center">
                            <h1 className="text-[36px] font-bold text-right mr-4">{mobileApplicationData.judul}</h1>
                            <h2 className="mt-4 text-white text-[12px] font-normal mx-4 text-right">{mobileApplicationData.deskripsi}</h2>
                        </div>
                    </div>
                )}

                {selectedItem === 'Web Application' && (
                    <div className="w-1/2 h-auto relative">
                        <img src={webApplicationData.image} alt={webApplicationData.judul} />
                        <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-white text-center">
                            <h1 className="text-[36px] font-bold text-right mr-4">{webApplicationData.judul}</h1>
                            <h2 className="mt-4 text-white text-[12px] font-normal mx-4 text-right">{webApplicationData.deskripsi}</h2>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

