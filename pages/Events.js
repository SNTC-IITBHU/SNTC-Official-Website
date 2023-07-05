import Navbar from "../components/Navbar";
import EventsPage from "../components/EventsPage";
import Footer from "../components/Footer";
export default function Events() {
  return (
    <>
     <div className='bg-[#110414]'>

        <Navbar></Navbar>
        <EventsPage></EventsPage>
        <Footer></Footer>
     </div>
      
    </>
  );
}
