import { useState } from 'react';
import WhatWeDoDesc from "../components/whatwedo_desc";

export default function WhatWeDo() {
    return (
        <>
            <div className="flex mx-80 mt-32 gap-4">
                <div className="w-1/2 h-auto">
                    <h1 className="text-[36px] font-bold">What</h1>
                    <h1 className="text-[36px] font-bold">We Do ?</h1>
                    <h2 className="mt-8 text-gray-500 text-[24px] font-medium">
                        <ul>
                            <li>Mobile Application</li>
                            <li>Web Application</li>
                        </ul>
                    </h2>
                </div>
                <div className="w-1/2 flex h-auto justify-center">
                </div>
            </div>
        </>
    );
}
