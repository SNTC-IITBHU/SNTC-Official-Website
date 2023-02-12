import ClubsPages from "../components/Clubspage";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
export default function OurClubs() {
  return (
    <>
      <div className="bg-black overflow-hidden m-0 p-0">
        <Navbar></Navbar>
        <ClubsPages></ClubsPages>
      </div>
    </>
  );
}
