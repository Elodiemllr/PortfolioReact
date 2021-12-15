import { Icon } from "@iconify/react";
import React from "react";
import "../styles/Banner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <p className="banner__text"> Elodie Muller </p>
            <p className="banner__text" id="banner__contact">
                Contact moi{" "}
                <Icon className="banner__icon" icon="fluent:mail-20-regular" />
            </p>
        </div>
    );
};

export default Banner;
