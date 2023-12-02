import "./App.css";
import HomePage from "./pages/HomePage";
import Customers_page from "./pages/customers_page";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Career from "./pages/Career";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/*" element={<Customers_page />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
