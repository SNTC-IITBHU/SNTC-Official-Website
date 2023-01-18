import { AnimationOnScroll } from "react-animation-on-scroll";


const Technex=()=>{
    return (
      <div className="relative  flex flex-col top-[-40vh] h-[120vh]  w-screen bg-cover bg-[url('/Technex/technex_bg.svg')] justify-around">
        <img className="h-[10vh] md:h-[30vh] mt-[10vh]" src="/Technex/technex_titile.svg" alt="" />
        <div className="md:flex flex-row justify-around">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img className="h-[10vh] md:h-auto m-auto md:my-[15%]" src="/Technex/About Technex.svg" alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
          <img className="m-[10%] w-[80vw] md:w-auto" src="/Technex/content_technex.svg" alt="" />
          </AnimationOnScroll>
        </div>
      </div>
    );
}
export default Technex;