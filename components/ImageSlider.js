import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "slider.css"

export default function ImageSlider({ slides }) {
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
            {slides.map((slide, index) => (
                <div key={index}>
                    <Image alt={slide.title} width={100} height={100} src={slide.source} />
                </div>
            ))}
        </Carousel>
    );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
