import Navbar from "../components/navbar/Navbar";
import TeamComponent from "../components/teamcomponent";
import Footer from "../components/Footer";

function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <TeamComponent />
      </div>
      <Footer />
    </>
  );
}

export default TeamPage;
