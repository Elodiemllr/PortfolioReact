import { Icon } from "@iconify/react";
import React from "react";
import "../styles/Home.scss";
import videoElodie from "../video/videoElo.mp4";
const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__spacer"> </div>
                <video width="auto" height="auto" autoPlay loop="true" muted>
                    <source src={videoElodie} type="video/mp4" />
                </video>
                <div className="home__spacer"> </div>
                <a
                    href="#project"
                    className="home__scroll__button button--flex"
                >
                    <Icon
                        icon="iconoir:mouse-scroll-wheel"
                        className="home__scroll__arrow"
                    />
                </a>
            </div>
        </section>
    );
};

export default Home;
