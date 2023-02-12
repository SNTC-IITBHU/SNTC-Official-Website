import Clubspages from "@/components/Clubspage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function OurClubs() {
  return (
    <>
      <div className="bg-black overflow-hidden border-0 m-0 p-0">
        <Navbar></Navbar>

        <Clubspages></Clubspages>

        <Footer></Footer>
      </div>
    </>
  );
}
