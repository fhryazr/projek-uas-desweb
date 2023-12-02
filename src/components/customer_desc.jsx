// import { useState } from 'react'

export default function Customer_desc() {
    const customer = {
        nama: "Mandiri Sekuritas",
        deskripsi: "Perusahaan Mandiri Sekuritas adalah salah satu lembaga pialang atau perusahaan sekuritas terkemuka di Indonesia. Berdiri sebagai anak perusahaan PT Bank Mandiri (Persero) Tbk, Mandiri Sekuritas telah membangun reputasi yang kuat dalam menyediakan layanan investasi dan keuangan kepada pelanggan di pasar modal Indonesia.",
        image: "../src/assets/customers.jpg",
        ceo: "Amalia Kartika"

    }
    return (
        <div className="flex mx-80 mt-16 p-4 px-16 gap-4 rounded-full bg-green-100">
            <div className="w-1/2 h-auto">
                <img src={customer.image} alt="Deskripsi gambar" />
            </div>
            <div className="w-1/2 flex flex-col h-auto justify-between">
                <div>
                    <h1 className="text-[36px] font-bold">{customer.nama}</h1>
                    <h2 className="mt-4 text-gray-500 text-[12px] font-medium">{customer.deskripsi}</h2>
                </div>
                <h3 className="mt-8 text-slate-500 font-medium">{customer.ceo}</h3>
            </div>
        </div>
    );
}
