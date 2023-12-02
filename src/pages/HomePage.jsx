import Home from "../components/Home/Home";
import Work from "../components/Work/Work";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
        <div className="h-screen">
          <Navbar />
          <Home />
        </div>
        <Work id="Work"/>
        <Footer />
    </>
  );
}

export default HomePage;
