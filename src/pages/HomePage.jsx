import Home from "../components/Home/Home";
import Work from "../components/Work/Work";
import Navbar from "../components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <>
        <div className="h-screen">
          <Home />
        </div>
        <Work id="Work"/>
      </>
    </>
  );
}

export default HomePage;
