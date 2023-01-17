import ImageSlider from "../components/ImageSlider";

export default function Achievements(){

    const slides = [
        { source: "/sliderimage.png", title: "kvt" },
        { source: "/sliderimage.png", title: "kvt" },
        { source: "/sliderimage.png", title: "kvt" },
        { source: "/sliderimage.png", title: "kvt" },
      ];
    return(
        <div className="bg-[#2D1634] mt-[-10px] h-[80vh]">
            <div className="text-center text-5xl text-pink-600 font-extrabold mt-[0px]">
                ACHIEVEMENTS
            </div>
            <div className="">
                <ImageSlider slides = {slides}/>
            </div>
        </div>
    )
}