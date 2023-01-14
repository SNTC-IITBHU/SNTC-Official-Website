import Navbar from "./Navbar";
import Logo from "./logo";
import Hero from "./Hero";
import Aboutus from "./aboutus";
import Footer from "./Footer";
import Events from "./Events";
export default function Home() {
  return (
    <>
      <div className="static bg-black ">
        <Logo className='absolute top-0 right-0'></Logo>
        <div className="absolute right-0 top-0  w-[75%] p-0">
        <Navbar className="absolute top-0 right-0"></Navbar>
        </div>
        <div className="absolute top-[6%] md:top-[15%] right-[7%] md:right-[10%] z-0">
          <Hero></Hero>
        </div>
        <img id="aboutus" src="/wave1.svg" className="absolute top-[33%] md:top-[84%]"></img>
        <div className="absolute top-[34%] md:top-[110%]">
          
          <Aboutus ></Aboutus>
        </div>
        <img id="events" src="/wave1.svg" className="absolute top-[65%] md:top-[175%]"></img>
        <img  id="achievements" src="/acheivements.svg" className="absolute  w-[80%] md:w-[60%] top-[72%] md:top-[196%] left-[10%] md:left-[22%]"></img>
        <div  className="absolute top-[79%] md:top-[200%] left-0 md:left-[23%] ">
        <Events ></Events>
        </div>
        <div className="absolute top-[110%] md:top-[356%] left-0 md:left-[23%]  text-[12px] md:text-[20px] ">
        <Footer ></Footer>
        </div>
          
      </div>
    </>
  )
}
