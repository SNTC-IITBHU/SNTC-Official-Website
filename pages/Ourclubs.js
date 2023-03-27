import ClubsPages from "../components/Clubspage";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
export default function OurClubs() {
  return (
    <>
      <div className="bg-black h-[100vh]   m-0 p-0">
        <Navbar></Navbar>
        <ClubsPages></ClubsPages>
      </div>
    </>
  );
}
