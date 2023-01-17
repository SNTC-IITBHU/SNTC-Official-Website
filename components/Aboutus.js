import Wave from "react-wavify";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Aboutus = () => {
  return (
    <div className="relative top-[-5%]">
      <Wave
        fill="#2D1634"
        paused={false}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.35,
          points: 2,
        }}
      />
      <div className="md:h-screen relative -top-5 bg-gradient-to-b from-[#2D1634] to-[#1e0925]">
        <div
          className="
        relative md:top-[20%]
        flex lg:flex-row flex-col sm:flex-col w-[90vw]
        md:justify-around
        mx-auto
        "
        >
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
            className="h-[20vh]
            my-[10%]  
            "
            src="/About/imagesntc_abt.svg"
            alt=""
          />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <div
            className="about-content flex flex-col
          my-[5%] md:justify-around h-[50vh]"
          >
            <img src="/About/About usabt_title.svg" alt="" />
            <img className="my-[10%] " src="/About/abt_content.svg" alt="" />
          </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
