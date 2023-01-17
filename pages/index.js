import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Achievements from "../components/Achievements";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Amongusbg from "@/components/Amongusbg";
import Technex from "@/components/Technex";
export default function Home() {
  return (
    <>
      <div className="bg-black">
        {/* <Amongusbg></Amongusbg> */}
        <Navbar></Navbar>
        <Hero></Hero>
        <Aboutus></Aboutus>
        <Achievements></Achievements>
        <Technex></Technex>
        <Footer></Footer>
      </div>
    </>
  );
}
