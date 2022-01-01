import React from "react";
import "../styles/Skills.scss";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="skills__content">
                <h2>My Skills</h2>
                <p className="skills__content__text">
                    {" "}
                    Apprendre un nouveau langage ne m'est pas impossible, je me
                    perfectionne sur React mais vais prochainement apprenre à
                    maîtriser React Native{" "}
                </p>
                <div className="skills__content__title"> Skills </div>
            </div>
        </section>
    );
};

export default Skills;
