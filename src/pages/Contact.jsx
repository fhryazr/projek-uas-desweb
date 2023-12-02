import ContactForm from "../components/Contact/ContactForm";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="h-screen pt-[5rem] w-[80vw] mx-auto flex justify-center items-center">
        <div className="Contact hidden md:block md:w-[100vw] md:h-[40rem] ml-0 xl:ml-[10rem]"></div>
        <div className="w-[80vw] md:w-[50vw] lg:w-[40vw] lg:ml-[30rem] xl:ml-[30rem] absolute z-10">
          <ContactForm />
        </div>
      </div>
      <Footer />
      <style>
        {`
          .Contact {
            background-image: url('/contact-img.svg');
            background-repeat: no-repeat;
            background-size: contain;
          }
        `}
      </style>
    </>
  );
}

export default Contact;
