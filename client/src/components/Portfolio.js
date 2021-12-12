import React from "react";
import { Button, Card } from "semantic-ui-react";
import Datas from "../data.js";
import "../styles/Portfolio.scss";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="section__title"> Mes projets </h2>
            <div className="portfolio__projets">
                {Datas.map((slide) => (
                    <>
                        <Card
                            className="portfolio__container"
                            image={slide.image}
                            meta={slide.name}
                            description={slide.description}
                            extra=<div className="portfolio__buttons">
                                {" "}
                                <Button className="portfolio__button" primary>
                                    <a href={slide.github}>Github</a>
                                </Button>{" "}
                                <Button className="portfolio__button" secondary>
                                    {" "}
                                    <a href={slide.link}>Site web</a>
                                </Button>
                            </div>
                        />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
