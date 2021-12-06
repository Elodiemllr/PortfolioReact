import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Datas from "../data.js";
import "../styles/Portfolio.scss";

const Portfolio = () => {
    return (
        <Carousel>
            {Datas.map((slide) => (
                <div key={slide.id}>
                    <img src={slide.image} alt=" projet" />
                </div>
            ))}
        </Carousel>
    );
};

export default Portfolio;
