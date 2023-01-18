import { AnimationOnScroll } from "react-animation-on-scroll";


const Technex=()=>{
    return (
      <div className="relative flex flex-col top-[-40vh] h-screen w-screen bg-cover bg-[url('/Technex/technex_bg.svg')] justify-around">
        <img className="h-[30vh] mt-[10vh]" src="/Technex/technex_titile.svg" alt="" />
        <div className="flex flex-row justify-around">
          <AnimationOnScroll animateOnce={true} delay={0} animateIn="animate__fadeInLeft">
            <img src="/Technex/About Technex.svg" alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} delay={0} animateIn="animate__fadeInRight">
          <img src="/Technex/content_technex.svg" alt="" />
          </AnimationOnScroll>
        </div>
      </div>
    );
}
export default Technex;