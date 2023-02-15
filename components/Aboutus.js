import Wave from "react-wavify";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useState } from "react";

const Aboutus = () => {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div id="about-us" className="relative top-[-5%]">
      <AnimationOnScroll
        animateIn="animate__pulse"
        afterAnimatedIn={function (visible) {
          setIsPaused(false);
          setTimeout(() => {
            setIsPaused(true);
          }, 1500);
        }}
        afterAnimatedOut={
          function (visible) {
          setIsPaused(true);
        }}
      ></AnimationOnScroll>
      <Wave
        fill="#2D1634"
        paused={isPaused}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.35,
          points: 3,
        }}
      />
      <div className="md:h-[100vh] relative -top-5 bg-gradient-to-b from-[#2D1634] to-[#1e0925]">
        <div
          className="
        relative md:top-[20%]
        flex lg:flex-row flex-col sm:flex-col w-[90vw]
        
        mx-auto
        "
        >
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
              className=" 2xl:w-[1600px] w-[300px] 2xl:mt-[6%] mt-[4%] 2xl:ml-[2%] ml-[6%]  md:w-[1500px] md:mt-[-10px]"
              src="/About/imagesntc_abt.svg"
              alt=""
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <div
              className="about-main sm :  flex flex- flex-wrap 
           ml-[10%] md:justify-around h-[50vh] md : mt-[20px] "
            >
              {/* <img src="/About/About usabt_title.svg" alt="" /> */}
              {/* <img className="my-[10%] " src="/About/abt_content.svg" alt="" /> */}
              <div className="about-heading text-[#8C50A6] font-bold  text-[65px] 2xl:text-8xl  md:text-8xl md:mt-[-100px] md:mr-[-10px]">About Us</div>
              <div className="about-content ml-[-2%] md:ml-[5%] text-white text-[19px] 2xl:mt-[-160px] 2xl:ml-[10%] 2xl:text-3xl  md:mt-[-80px] md:text-3xl">The Science and Technology Council at IIT BHU is a student-run organization that aims to promote the understanding and application of science and technology among the IIT BHU community. </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
