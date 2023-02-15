import Wave from "react-wavify";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useState } from "react";
const Contact = () => {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="relative md:top-[-50vh] top-[-10%] lg:top-[-60vh]">
      <AnimationOnScroll
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
      ></AnimationOnScroll>
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
      <div className="bg-[#1E0226] h-[70vh] w-screen  relative -top-5 flex flex-col justify-around">
        <img className="h-[5vh] w-[80vw] mx-auto" src="/Contacts/Meet.svg" alt="" />
        <div className="flex flex-row justify-around mb-[10vh] bg-contain bg-[url('/Contacts/Soundwaves+rectangle.svg')]">
          <div className="flex flex-col max-w-[33vw] mx-1">
            <img
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src="/Contacts/image 20.svg"
              alt=""
            />
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Lakshya Singh
            </div>
            <div className="text-white m-auto text-sm">
              Joint General Secretary
            </div>
          </div>
          <div className="flex flex-col max-w-[33vw]">
            <img
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src="/Contacts/image 21.svg"
              alt=""
            />
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Manish Rai
            </div>
            <div className="text-white m-auto text-sm">General Secretary</div>
          </div>
          <div className="flex flex-col max-w-[33vw]">
            <img
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src="/Contacts/image 22.svg"
              alt=""
            />
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
