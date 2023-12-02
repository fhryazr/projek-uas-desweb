import "./App.css";
import HomePage from "./pages/HomePage";
import Customers_page from "./pages/customers_page";
import { Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/*" element={<Customers_page />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
