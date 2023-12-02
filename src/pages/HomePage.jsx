import Home from "../components/Home/Home";
import Work from "../components/Work/Work";

function HomePage() {
  return (
    <>
        <div className="h-screen">
          <Home />
        </div>
        <Work id="Work"/>
    </>
  );
}

export default HomePage;
