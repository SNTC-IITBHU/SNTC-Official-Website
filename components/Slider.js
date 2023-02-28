import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
// import 'swiper/css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from '/sliderimage.png';
// import slide_image_2 from '/sliderimage.png';
// import slide_image_3 from '/sliderimage.png';
// import slide_image_3 from './assets/images/img_3.jpg';
// import slide_image_4 from './assets/images/img_4.jpg';

export default function Slider(props) {


    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
            <SwiperSlide>
                <div className="grid md:grid-cols-2">
                    <div className="image">

                        <Image src={props.slides[0].source} width={700} height={500} alt="This is an image." />
                    </div>
                    <div className="info flex justify-center flex-col">

                        <div className="title">
                            <p className="font-bold text-4xl pb-12">
                                Title
                            </p>
                        </div>
                        <p className="text-gray-500 py-3">
                            Description
                        </p>

                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide> <div className="grid md:grid-cols-2">
                <div className="image">

                    <Image src={props.slides[1].source} width={800} height={400} alt="This is an image." />
                </div>
                <div className="info flex justify-center flex-col">

                    <div className="title">
                        <p className="font-bold text-4xl pb-12">
                            Title
                        </p>
                    </div>
                    <p className="text-gray-500 py-3">
                        Description
                    </p>

                </div>
            </div></SwiperSlide>

            <SwiperSlide> <div className="grid md:grid-cols-2">
                <div className="image">

                    <Image src={props.slides[2].source} width={700} height={400} alt="This is an image." />
                </div>
                <div className="info flex justify-center flex-col">

                    <div className="title">
                        <p className="font-bold text-4xl pb-12">
                            Title
                        </p>
                    </div>
                    <p className="text-gray-500 py-3">
                        Description
                    </p>

                </div>
            </div></SwiperSlide>

            <SwiperSlide> <div className="grid md:grid-cols-2">
                <div className="image">

                    <Image src={props.slides[3].source} width={800} height={400} alt="This is an image." />
                </div>
                <div className="info flex justify-center flex-col">

                    <div className="title">
                        <p className="font-bold text-4xl pb-12">
                            Title
                        </p>
                    </div>
                    <p className="text-gray-500 py-3">
                        Description
                    </p>

                </div>
            </div></SwiperSlide>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow animate__bounceInLeft">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow animate__backInRight">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </Swiper>
    )
    // function Slide() {
    //     const [currentIndex, setCurrentIndex] = useState(0);
    //     return (
    //         <div className="grid md:grid-cols-2">
    //             <div className="image">

    //                 <Image src={props.slides[currentIndex].source} width={800} height={400} alt="This is an image." />
    //             </div>
    //             <div className="info flex justify-center flex-col">

    //                 <div className="title">
    //                     <p className="font-bold text-4xl pb-12">
    //                         Title
    //                     </p>
    //                 </div>
    //                 <p className="text-gray-500 py-3">
    //                     Description
    //                 </p>

    //             </div>
    //         </div>
    //     )
    // }
}


