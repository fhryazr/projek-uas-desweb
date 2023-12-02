/* eslint-disable react/prop-types */
const Header = () => (
  <div className="Teks bg-white flex flex-col w-full md:w-[60vw] md:h-screen justify-center px-4 lg:px-[10rem] xl:px-[15rem] h-[50vh] transition-all ease-in-out duration-300">
    <h1 className="text-[2rem] lg:text-[4.5rem] font-bold">
      We Code, <br /> We Deliver
    </h1>
    <div className="h-2 w-[5rem] bg-black mb-8"></div>
    <p className="text-[1.2rem] xl:w-[30rem] xl:mt-[4rem]">
      Twiscode specializes in developing high-performing mobile and web
      applications.
    </p>
    <button className="bg-black text-white px-10 py-2 rounded-md mt-8 lg:hidden">
      How We Works
    </button>
  </div>
);

export default Header;
