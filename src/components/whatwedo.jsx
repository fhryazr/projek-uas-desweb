export default function WhatWeDo({ handleItemClick }) {
    return (
        <div className="flex mx-80 mt-32 gap-4">
            <div className="w-1/2 h-auto">
                <h1 className="text-[36px] font-bold">What</h1>
                <h1 className="text-[36px] font-bold">We Do ?</h1>
                <h2 className="mt-8 text-gray-500 text-[24px] font-medium">
                    <ul>
                        <li onClick={() => handleItemClick('Mobile Application')} className="cursor-pointer">Mobile Application</li>
                        <li onClick={() => handleItemClick('Web Application')} className="cursor-pointer">Web Application</li>
                    </ul>
                </h2>
            </div>
            <div className="w-1/2 flex h-auto justify-center">
            </div>
        </div>
    );
}
