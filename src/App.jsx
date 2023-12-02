import React from 'react';
import Footer from './components/Footer';
import Apply from './components/Apply';
import './App.css'; 


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Konten lain dari aplikasi */}
      <div className="flex-grow">
        {/* Komponen lainnya */}
      </div>
      <Apply />
      <Footer />
    </div>
  )
}

export default App