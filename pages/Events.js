import Navbar from "../components/Navbar";
import EventsPage from "../components/EventsPage";
import Footer from "../components/FooterNew";
import Wave from "react-wavify";
import {useState} from "react";
export default function Events() {
    const [isPaused, setIsPaused] = useState(false);

    return (
    <>
     <div className='bg-[#110414]'>

        <Navbar></Navbar>
        <EventsPage></EventsPage>
         <Wave
             fill="#1E0226"
             paused={isPaused}
             options={{
                 height: 50,
                 amplitude: 50,
                 speed: 0.35,
                 points: 3,
             }}
         />
        <Footer></Footer>
     </div>
      
    </>
  );
}
