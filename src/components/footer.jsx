// src/components/Footer.js
import { Link } from "react-router-dom"; // Import Link component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-evenly  items-center lg:items-start">
        {/* Kolom Lokasi */}
        <div className="flex flex-col justify-center h-[30vh] lg:w-1/3 lg:mb-0 px-10 mb-10">
          <h5 className="font-bold text-lg mb-4 text-center">Location</h5>
          <div className="mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0153930037386!2d116.85950042651069!3d-1.1494933854951208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0x8489d5309f45c0db!2sKalimantan%20Institute%20of%20Technology!5e0!3m2!1sen!2sid!4v1701512245612!5m2!1sen!2sid"
              width="200"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        {/* Kolom Perusahaan */}
        <div className="lg:flex lg:gap-5">
          <div className="w-full lg:w-2/3 mb-6 lg:mb-0 px-10 lg:px-20">
            <h5 className="font-bold text-lg mb-4">Company</h5>
            <ul>
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/service">Service</Link>
              </li>
              <li className="mb-2">
                <Link to="/teams">Team</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div className="w-full lg:w-2/3 mb-6 lg:mb-0 px-10">
            <div className="flex flex-col mb-6">
              <h5 className="font-bold text-lg mb-4">Contact Us</h5>
              <ul>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <a href="mailto:rendyfernanda10@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Garis pemisah */}
      <div className="border-t border-gray-300 my-4"></div>{" "}
      {/* <-- Garis pemisah ditambahkan di sini */}
      <div className="text-center text-sm mt-10">
        © 2023 Twiscode Pte. Ltd. | PT. Dapur Rumah Sejahtera
      </div>
    </footer>
  );
};

export default Footer;
