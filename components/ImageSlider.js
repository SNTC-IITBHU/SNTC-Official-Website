import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../styles/ImageSlider.module.css";
import { useRef } from 'react';

export default function ImageSlider(props) {

  var widthPercentage = "22.5rem";
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // console.log(windowSize);
  // if (windowSize[0] <= 600) {

  //   widthPercentage = "2rem";
  // }
  console.log(widthPercentage);
  return (
    <Carousel className="flex-coloumn items-center justify-center sm:w-[16rem] md:w-[32rem] lg:w-[40rem] 
    xl:w-[50rem] 2xl:w-[60rem]" thumbWidth={90} autoPlay={true} infiniteLoop showArrows={false} showStatus={false} showThumbs={false} interval={2000} >
      <div>
        <img src={props.slides[0].source} />

      </div>
      <div>
        <img src={props.slides[1].source} />

      </div>
      <div>
        <img src={props.slides[2].source} />

      </div>
      <div>
        <img src={props.slides[3].source} />

      </div>
    </Carousel>
  );
}




// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));