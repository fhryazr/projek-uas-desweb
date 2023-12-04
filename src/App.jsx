import "./App.css";
import HomePage from "./pages/HomePage";
import Customers_page from "./pages/customers_page"
import Footer from './components/Footer';
import TeamComponent from './components/teamcomponent';
import Apply from './components/Apply';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
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
=======
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/customers/*" element={<Customers_page/>}/>
>>>>>>> 6f34050d6d4d58ccd729fa15ead3a7118ce0b5d4
        <Apply />
        <Footer />
      </Routes>
    </>
  );
}

export default App;
