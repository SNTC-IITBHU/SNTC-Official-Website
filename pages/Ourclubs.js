import ClubsPages from "@/components/ClubsPage";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
export default function OurClubs() {
  return (
    <>
      <div className="bg-black overflow-hidden border-0 m-0 p-0">
        <div className="pt-[0px] mt-0">
         <Navbar></Navbar>
         </div>
        <ClubsPages></ClubsPages>
      </div>
    </>
  );
}
