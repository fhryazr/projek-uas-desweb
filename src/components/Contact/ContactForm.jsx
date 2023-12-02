import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const notify = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      sound: true,
    });
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xgejjqzk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");

        // Tampilkan notifikasi berhasil
        notify("Form submitted successfully!");

        // Set formData back to initial values after successful submission
        setFormData(initialFormData);
      } else {
        console.error("Form submission failed!");

        // Tampilkan notifikasi gagal
        toast.error("Form submission failed!");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);

      // Tampilkan notifikasi gagal
      toast.error("An error occurred during form submission");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Send Us a Message</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={handleChange}></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer className="z-[9999]"/>
    </>
  );
}

export default ContactForm;
