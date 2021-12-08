import React from "react";
import { Button, Card } from "semantic-ui-react";
import Datas from "../data.js";
import "../styles/Portfolio.scss";

const Portfolio = () => {
    const ButtonExampleEmphasis = () => (
        <div>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
        </div>
    );
    return (
        <div className="portfolio">
            <h2> Mes projets </h2>
            {Datas.map((slide) => (
                <>
                    <Card
                        key={slide.id}
                        className="portfolio__container"
                        image={slide.image}
                        header={slide.name}
                        meta={slide.langage}
                        description={slide.description}
                        extra={<ButtonExampleEmphasis />}
                    />{" "}
                </>
            ))}
        </div>
    );
};

export default Portfolio;
