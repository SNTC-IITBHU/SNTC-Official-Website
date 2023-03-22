import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>

                <Slider {...settings}>
                    <div>
                        <img src={this.props.slides[0].source} />
                    </div>
                    <div>
                        <img src={this.props.slides[1].source} />
                    </div>
                    <div>
                        <img src={this.props.slides[2].source} />
                    </div>
                    <div>

                        <img src={this.props.slides[3].source} />
                    </div>

                </Slider>
            </div>
        );
    }
}