import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Achievements from "../components/Achievements";
import Hero from "../components/Hero";
import Footer from "../components/FooterNew";
import Amongusbg from "@/components/Amongusbg";
import Technex from "@/components/Technex";
import Contact from "@/components/Contact";
import Contactus from "@/components/Contactus";
import Clubs from "@/components/Clubs";
export default function Home() {
  return (
    <>
      <div className="bg-[#110414] overflow-hidden">
        {/* <Amongusbg></Amongusbg> */}
        <Navbar></Navbar>
        <Hero></Hero>
        <Aboutus></Aboutus>
        <Clubs/>
        <Achievements></Achievements>
        <Technex></Technex>
        <Contact></Contact>
        {/*<Contactus></Contactus>*/}
        <Footer></Footer>
      </div>
    </>
  );
}
