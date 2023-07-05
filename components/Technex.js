import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from 'next/image'
import Technextitle from '../public/Technex/technex_titile.svg'
import AboutTechnex from '../public/Technex/About Technex.svg'
import TechnexContent from '../public/Technex/content_technex.svg'
const Technex=()=>{
    return (
      <div

        className="relative w-screen  flex flex-col top-[-50vh] lg:top-[-70vh]
      h-[80vh] md:h-[120vh]  w-screen bg-cover bg-[url('/Technex/technex_bg.svg')] justify-around"

      >
        <Image
          className="h-[10vh] md:h-[30vh] mt-[10vh]"
          src={Technextitle}
          alt=""
        ></Image>
        <div className="md:flex flex-row justify-around">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <Image
              className="h-[10vh] md:h-auto m-auto md:my-[15%] lg:my-[5%]
              "
              src={AboutTechnex}
              alt=""
            ></Image>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <Image
              className="m-[auto] w-[80vw] md:w-auto lg:w-[50vw] h-[10vh] md:h-auto"
              src={TechnexContent}
              alt=""
            ></Image>
          </AnimationOnScroll>
        </div>
      </div>
    );
}
export default Technex;