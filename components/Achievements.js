import ImageSlider from "../components/ImageSlider";
import Wave from "react-wavify";
export default function Achievements(){

    const slides = [
        { source: "/sliderimage.png", title: "kvt" },
        { source: "/sliderimage.png", title: "kvt" },
        { source: "/sliderimage.png", title: "kvt" },
        { source: "/sliderimage.png", title: "kvt" },
      ];
    return (
      <div className="relative top-[-20vh]">
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
        <div className="bg-[#2D1634] mt-[-10px] h-[120vh] relative -top-5">
          <div className="text-center text-5xl text-pink-600 font-extrabold relative top-[10%]">
            ACHIEVEMENTS
          </div>
          <div className="">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    );
}