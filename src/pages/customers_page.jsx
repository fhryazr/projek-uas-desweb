import Customer_desc from "../components/customer_desc";
import Customers from "../components/customers";
import Navbar from "../components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

export default function Customers_page() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/descriptions" element={<Customer_desc />} />
      </Routes>
    </>
  );
}
