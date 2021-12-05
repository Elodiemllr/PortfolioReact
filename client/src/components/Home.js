import { Icon } from "@iconify/react";
import React from "react";
import "../styles/home.scss";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a
                            href="https://www.linkedin.com/in/elodie-muller-09846417b/"
                            target="_blank"
                            className="home__social-icon"
                            rel="noreferrer"
                        >
                            <Icon icon="uil:linkedin-alt" />
                        </a>
                        <a
                            href="https://dribbble.com/elodie-js"
                            target="_blank"
                            className="home__social-icon"
                            rel="noreferrer"
                        >
                            <Icon icon="uil:dribbble" />
                        </a>
                        <a
                            href="https://github.com/Elodiemllr"
                            target="_blank"
                            className="home__social-icon"
                            rel="noreferrer"
                        >
                            <Icon icon="uil:github-alt" />
                        </a>
                    </div>
                    <div className="home__img">
                        <div
                            class="home__blob"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="375pt"
                            height="374.999991pt"
                            viewBox="0 0 375 374.999991"
                            version="1.2"
                        >
                            <img
                                className="home__blob-img"
                                y="-20"
                                x="-60"
                                src="./img/elodie.png"
                                alt="logo_elodie"
                            />
                        </div>
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Moi, c'est Elodie!</h1>
                        <h3 className="home__subtitle">
                            développeur web et web mobile
                        </h3>
                        <p className="home__description">
                            {" "}
                            Passionnée de développement web, soupoudré d'une
                            passion pour le design
                        </p>
                        <a href="#contact" className="button button--flex">
                            Me contacter{" "}
                        </a>
                    </div>
                </div>
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
