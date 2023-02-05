import { AnimationOnScroll } from "react-animation-on-scroll";


const Technex=()=>{
    return (
      <div

        className="relative w-screen  flex flex-col top-[-50vh] lg:top-[-70vh]
      h-[80vh] md:h-[120vh]  w-screen bg-cover bg-[url('/Technex/technex_bg.svg')] justify-around"

      >
        <img
          className="h-[10vh] md:h-[30vh] mt-[10vh]"
          src="/Technex/technex_titile.svg"
          alt=""
        />
        <div className="md:flex flex-row justify-around">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
              className="h-[10vh] md:h-auto m-auto md:my-[15%] lg:my-[5%]
              "
              src="/Technex/About Technex.svg"
              alt=""
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img
              className="m-[auto] w-[80vw] md:w-auto lg:w-[50vw] h-[10vh] md:h-auto"
              src="/Technex/content_technex.svg"
              alt=""
            />
          </AnimationOnScroll>
        </div>
      </div>
    );
}
export default Technex;