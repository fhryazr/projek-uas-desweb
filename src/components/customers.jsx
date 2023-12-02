// import { useState } from 'react'

export default function Customers() {
    return (
        <>
            <div className="flex mx-80 mt-32 gap-4">
                <div className="w-1/2 h-auto">
                    <h1 className="text-[36px] font-bold">Our Customers are our biggest fans</h1>
                    <h2 className="mt-8 text-gray-500 text-[24px] font-medium">We have helped startups around the globe as well as fortune 500 companies</h2>
                    <h3 className="mt-8 text-lime-500 font-medium">See All</h3>
                </div>
                <div className="w-1/2 flex h-auto justify-center">
                    <img src="..\src\assets\customers.jpg" alt="Deskripsi gambar" />
                </div>
            </div>
        </>
    );
}
