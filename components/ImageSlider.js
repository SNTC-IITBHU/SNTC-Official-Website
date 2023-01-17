import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function ImageSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

//   const leftArrowStyles = {
//     position: "absolute",
//     margin: "auto",
//     justifyContent: "center",
//     alignItems: "center",
//     left: "0px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//   };

//   const rightArrowStyles = {
//     position: "absolute",
//     margin: "auto",
//     justifyContent: "center",
//     right: "0px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//   };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
      <div className="flex flex-row justify-around item-center">
        <div className="text-white text-5xl cursor-pointer flex flex-col justify-around" onClick={goToPrevious}>
            <div>
                {"<"}
            </div>
        </div>

        <div className="flex flex-col justify-around h-[31.138rem]">
            <Image
            height={400}
            width={800}
            src={props.slides[currentIndex].source}
            alt="This is an image."
            />
        </div>

        <div className="text-white text-5xl cursor-pointer flex flex-col justify-around" onClick={goToNext}>
          <div>
            {">"}
          </div>
        </div>
        
      </div>
    
  );
}
