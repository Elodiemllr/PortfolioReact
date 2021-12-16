import { Icon } from "@iconify/react";
import React from "react";
import "../styles/SocialMedia.scss";

const SocialMedia = () => {
    return (
        <div className="social">
            <div className="social__content">
                <a
                    href="https://www.linkedin.com/in/elodie-muller-09846417b/"
                    target="_blank"
                    className="social__icon"
                    rel="noreferrer"
                >
                    <Icon icon="uil:linkedin-alt" />
                </a>
                <a
                    href="https://dribbble.com/elodie-js"
                    target="_blank"
                    className="social__icon"
                    rel="noreferrer"
                >
                    <Icon icon="uil:dribbble" />
                </a>
                <a
                    href="https://github.com/Elodiemllr"
                    target="_blank"
                    className="social__icon"
                    rel="noreferrer"
                >
                    <Icon icon="uil:github-alt" />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
