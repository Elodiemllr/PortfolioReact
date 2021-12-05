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
                </div>
            </div>
        </section>
    );
};

export default Home;
