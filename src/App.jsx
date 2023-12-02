
import "./App.css";
import HomePage from "./pages/HomePage";
import Customers_page from "./pages/customers_page"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/customers" element={<Customers_page/>}/>
      </Routes>
    </>
  );
}

export default App;
