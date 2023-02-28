// import ImageSlider from "../components/ImageSlider";
import Wave from "react-wavify";
import Slider from "../components/Slider";
export default function Achievements() {

  const slides = [
    { source: "/180DC.png", title: "kvt" },
    { source: "/interIIT.png", title: "kvt" },
    { source: "/astroClub.png", title: "kvt" },
    { source: "/interIIT.png", title: "kvt" },
  ];
  return (
    <div id="achievements" className="relative top-[-40vh] lg:top-[-50vh]">
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
      <div className="bg-[#2D1634] mt-[-10px] md:h-[120vh] h-[100vh] relative -top-5">
        <div className="text-center md:text-8xl text-5xl text-[#8C50A6] font-bold mb-14 relative top-[5%]">
          Achievements
        </div>
        <div className="md:mt-[5%]">
          <Slider slides={slides} />
        </div>
      </div>
    </div>
  );
}