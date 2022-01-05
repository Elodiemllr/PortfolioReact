import { Icon } from "@iconify/react";
import React from "react";
import "../styles/Banner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <a className="banner__text" href="#home">
                {" "}
                Elodie Muller{" "}
            </a>
            <p className="banner__text" id="banner__contact">
                Contact moi{" "}
                <a href="mailto:elodiemuller.pro@outlook.com">
                    <Icon
                        className="banner__icon"
                        icon="fluent:mail-20-regular"
                        href="mailto:elodiemuller.pro@outlook.com"
                    ></Icon>
                </a>
            </p>
        </div>
    );
};

export default Banner;
