import React from "react";
import { Button, Card } from "semantic-ui-react";
import Datas from "../data.js";
import "../styles/Portfolio.scss";

const Portfolio = () => {
    const ButtonExampleEmphasis = () => (
        <div className="portfolio__buttons">
            <Button className="portfolio__button" primary>
                Primary
            </Button>
            <Button className="portfolio__button" secondary>
                Secondary
            </Button>
        </div>
    );
    return (
        <div className="portfolio">
            <h2 className="section__title"> Mes projets </h2>
            <div className="portfolio__projets">
                {Datas.map((slide) => (
                    <>
                        <Card
                            className="portfolio__container"
                            image={slide.image}
                            header="Elliot Baker"
                            meta={slide.name}
                            description={slide.description}
                            extra={<ButtonExampleEmphasis />}
                        />{" "}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
