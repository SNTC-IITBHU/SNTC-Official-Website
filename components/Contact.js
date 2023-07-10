import Wave from "react-wavify";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useState } from "react";
import Image from 'next/image'
import Meet from '../public/Contacts/Meet.svg'
import Img20 from '../public/Contacts/image 20.svg'
import Img21 from '../public/Contacts/image 21.svg'
import Img22 from '../public/Contacts/image 22.svg'
const Contact = () => {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="relative ">
      {/* <AnimationOnScroll
        animateIn="animate__pulse"
        afterAnimatedIn={function (visible) {
          setIsPaused(false);
          setTimeout(() => {
            setIsPaused(true);
          }, 1500);
        }}
        afterAnimatedOut={function (visible) {
          setIsPaused(true);
        }}
      ></AnimationOnScroll> */}
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
      <div className="bg-[#1E0226] h-[70vh] w-screen relative -top-5 flex flex-col justify-around">
        <Image className="h-[5vh] w-[80vw] mx-auto" src={Meet} alt="" ></Image>
        <div className="flex text-center flex-col sm:flex-row justify-around mb-[10vh] bg-contain bg-[url('/Contacts/Soundwaves+rectangle.svg')]">
          <div className="flex flex-col mt-4 mb-4 items-center sm:max-w-[33vw] mx-1">
            <Image
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src={Img20}
              alt=""
            ></Image>
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Lakshya Singh
            </div>
            <div className="text-white m-auto text-sm">
              Joint General Secretary
            </div>
          </div>
          <div className="flex flex-col mt-4 mb-4 items-center sm:max-w-[33vw]">
            <Image
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src={Img21}
              alt=""
            ></Image>
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Manish Rai
            </div>
            <div className="text-white m-auto text-sm">General Secretary</div>
          </div>
          <div className="flex flex-col mt-4 mb-4 items-center sm:max-w-[33vw]">
            <Image
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src={Img22}
              alt=""
            ></Image>
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Preety Sarwa
            </div>
            <div className="text-white m-auto text-sm">
              Joint General Secretary
            </div>
          </div>
        </div>
      </div>
     
    </div>
    
  );
}

export default Contact
