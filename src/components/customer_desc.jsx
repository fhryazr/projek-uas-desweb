// import { useState } from 'react'

export default function Customer_desc() {
    const customers = [
        {
            nama: "Mandiri Sekuritas",
            deskripsi: "Perusahaan Mandiri Sekuritas adalah salah satu lembaga pialang atau perusahaan sekuritas terkemuka di Indonesia. Berdiri sebagai anak perusahaan PT Bank Mandiri (Persero) Tbk, Mandiri Sekuritas telah membangun reputasi yang kuat dalam menyediakan layanan investasi dan keuangan kepada pelanggan di pasar modal Indonesia.",
            image: "../src/assets/mandiri-sekuritas.png",
            ceo: "Harold Tjiptadjaja"
        },
        {
            nama: "Amartha",
            deskripsi: "Amartha merupakan platform teknologi keuangan mikro terdepan yang memiliki misi mewujudkan kesejahteraan bersama lewat pembangunan infrastruktur keuangan digital bagi ekonomi akar rumput. Berdiri sejak 2010, Amartha hadir sebagai microfinance untuk menghubungkan usaha mikro pedesaan yang dijalankan oleh para perempuan tangguh dengan akses permodalan terjangkau.",
            image: "../src/assets/amartha.png",
            ceo: "Andi Taufan Garuda Putra"
        },
        {
            nama: "Paxel",
            deskripsi: "Paxel adalah perusahaan pengiriman berbasis teknologi yang berkomitmen untuk menyelesaikan tantangan jarak jauh di Indonesia. Kami terinspirasi oleh generasi urban, bersemangat dan sadar sosial yang menjadi pola pikir inovasi desain kami. Inilah mengapa kami fokus untuk memberikan pengalaman yang digerakkan oleh pelanggan yang memungkinkan kenyamanan dan kontrol.",
            image: "../src/assets/paxel.png",
            ceo: "Johari Zein"
        },
        {
            nama: "Wahyoo",
            deskripsi: "Wahyoo adalah sebuah perusahaan startup asal Indonesia yang berfokus pada sektor makanan dan restoran. Wahyoo berusaha untuk mendukung usaha kecil dan menengah di industri makanan dengan menyediakan platform yang membantu mereka untuk meningkatkan efisiensi operasional, manajemen inventori, dan meningkatkan kehadiran digital mereka.",
            image: "../src/assets/wahyoo.png",
            ceo: "Peter Shearer"
        },
        {
            nama: "Cisco",
            deskripsi: "Cisco adalah perusahaan teknologi global yang terkenal karena menyediakan berbagai solusi jaringan dan teknologi informasi. Didirikan pada tahun 1984, Cisco Systems, Inc. memiliki markas besar di San Jose, California, dan telah menjadi pemimpin dalam industri teknologi dan jaringan.",
            image: "../src/assets/cisco.png",
            ceo: "Leonard Bosack & Sandy Lerner"
        },
        {
            nama: "Legoas",
            deskripsi: "Dalam pelaksanaan dan pengembangan sistem lelang, Legoas telah menjadi balai lelang pertama yang melakukan proses lelang secara online dan terus mengembangkan teknologinya untuk selalu menjadi yang terbaik.",
            image: "../src/assets/legoas.png",
            ceo: "Kenneth Lee"
        },
        {
            nama: "Lubna",
            deskripsi: "Didirikan pada tahun 2018, Lubna.io bertujuan untuk mencapai misi menyediakan solusi terpadu bagi investor ritel dari semua kalangan – mulai dari pemula hingga profesional. Untuk pengguna pemula, Lubna.io menawarkan serangkaian bot perdagangan yang menggunakan sistem algoritmik canggih yang telah teruji sehingga pengguna dapat memilih untuk mengotomatiskan aktivitas perdagangan mereka di akun pialang pengguna. Sedangkan untuk trader profesional, Lubna.io memungkinkan mereka mengotomatiskan strategi trading mereka dan mendapatkan uang tambahan dengan meminjamkan strategi trading otomatis mereka kepada trader pemula.",
            image: "../src/assets/lubna.png",
            ceo: "Kevin Cahya"
        },
        {
            nama: "Riliv",
            deskripsi: "Riliv adalah sebuah platform kesehatan mental berbasis teknologi yang berfokus pada penyediaan layanan dukungan kesehatan mental. Mereka menyediakan solusi seperti konseling online, self-help, dan dukungan psikologis melalui platform digital mereka. Riliv bertujuan untuk membantu individu mengelola kesehatan mental mereka dengan cara yang praktis dan mudah diakses.",
            image: "../src/assets/riliv.png",
            ceo: "Muhammad Fajrin Rasyid"
        },
        {
            nama: "Universitas Airlangga",
            deskripsi: "Universitas Airlangga (UNAIR) adalah sebuah perguruan tinggi di Indonesia yang memiliki sejarah panjang dan prestasi yang mengesankan. Universitas ini didirikan pada tanggal 10 November 1954 di Surabaya, Jawa Timur, Indonesia. Pendirinya adalah sekelompok pemikir dan pemimpin masyarakat yang termotivasi untuk menyediakan pendidikan tinggi berkualitas dan berperan dalam pengembangan ilmu pengetahuan serta kesejahteraan masyarakat.",
            image: "../src/assets/unair.png",
            ceo: "Yayasan Perguruan Tinggi Airlangga"
        }
    ];

    return (
        <>
            {customers.map((customer, index) => (
                <div key={index} className="flex mx-80 mt-16 p-4 px-16 gap-4 rounded-full bg-green-100">
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
            ))}
        </>
    );
}
