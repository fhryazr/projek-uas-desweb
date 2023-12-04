import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import TeamComponent from './components/teamcomponent';
import Apply from './components/Apply';
import './App.css'; 



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Konten utama aplikasi */}
        <div className="flex-grow">
          <Routes>
            {/* Definisikan route di sini */}
            {/* Misalnya, jika Anda memiliki komponen Home, About, dll. */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* Sementara, Apply dan Footer tidak dalam Routes karena mereka muncul di semua halaman */}
          </Routes>
        </div>
        <TeamComponent />
        <Apply />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App