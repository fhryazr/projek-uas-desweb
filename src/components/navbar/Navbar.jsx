import { useState } from "react";
import Logo from "/logo_twiscode.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Our Customer", link: "/customers" },
    { name: "Team", link: "/teams" },
    { name: "Career", link: "/career" },
    { name: "Contact", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[999]">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img src={Logo} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer lg:hidden">
          <RxHamburgerMenu name={open ? "close" : "menu"} />
        </div>

        <ul
          className={`lg:flex lg:items-center md:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}>
          {Links.map((link) => (
            <li key={link.name} className="lg:ml-8 text-md lg:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
