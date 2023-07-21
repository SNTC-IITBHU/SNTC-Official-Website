import React, { Component } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "slider.css";

export default function ImageSlider(props) {
  return (
    <Carousel
      className="flex-coloumn items-center justify-center sm:w-[50rem]"
      thumbWidth={90}
      autoPlay={true}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={2000}
      height="40rem"
    >
      <div>
        <Image alt={""} width={100} height={100} src={props.slides[0].source} />
      </div>
      <div>
        <Image alt={""} width={100} height={100} src={props.slides[1].source} />
      </div>
      <div>
        <Image alt={""} width={100} height={100} src={props.slides[2].source} />
      </div>
      <div>
        <Image alt={""} width={100} height={100} src={props.slides[3].source} />
      </div>
    </Carousel>
  );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
