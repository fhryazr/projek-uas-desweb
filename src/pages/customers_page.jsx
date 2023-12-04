import Customer_desc from "../components/customer_desc";
import Customers from "../components/customers";
import { Routes, Route } from "react-router-dom";

export default function Customers_page() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/descriptions" element={<Customer_desc />} />
      </Routes>
    </>
  );
}
