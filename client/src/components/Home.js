import { Icon } from "@iconify/react";
import React from "react";
import "../styles/Home.scss";
import videoElodie from "../video/videoElo.mp4";
const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__scroll">
                    <video
                        width="auto"
                        height="auto"
                        autoPlay
                        loop="true"
                        muted
                    >
                        <source src={videoElodie} type="video/mp4" />
                    </video>
                    <a
                        href="#about"
                        className="home__scroll-button button--flex"
                    >
                        <Icon
                            icon="uil:mouse-alt-2"
                            className="home__scroll-mouse"
                        />

                        <span className="home__scroll-name">Scroll down</span>

                        <Icon
                            icon="uil:angle-down"
                            className="home__scroll-arrow"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
