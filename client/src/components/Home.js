import { Icon } from "@iconify/react";
import React from "react";
import "../styles/Home.scss";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__scroll">
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
