import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import { settings } from "./settings";
import { slides, Slide } from "./data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NatureSlider: React.FC = () => {
    const slideList = slides.map((slide: Slide) => (
        <div key={slide.id} className="card" id="reviews">
            <div className="card-top">
                <Image src={slide.image} alt="Slide" />
                <span className="span">
                    {slide.title} <br /> <span>*push me*</span>
                </span>
            </div>
            <div className="card-bottom">
                <h3>{slide.title}</h3>
                <p>{slide.content}</p>
            </div>
        </div>
    ));

    return (
        <section className="slider">
            <Slider {...settings}>{slideList}</Slider>
        </section>
    );
};
