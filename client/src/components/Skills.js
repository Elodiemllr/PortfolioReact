import React from "react";
import Datas from "../data.js";
import "../styles/Skills.scss";

const skills = Datas.Skills;

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="skills__content">
                <h2 className="skills__title">
                    {" "}
                    Mes skills{" "}
                    <p className="skills__content__title"> Skills </p>{" "}
                </h2>
                <p className="skills__content__text">
                    {" "}
                    Apprendre un nouveau langage ne m'est pas impossible, je me
                    perfectionne sur React mais vais prochainement apprendre à
                    maîtriser React Native{" "}
                </p>
            </div>
            <div className="skills__categories">
                <div className="skills__front">
                    <h2 className="skills__front__title"> </h2>
                    <ul>
                        {skills.map((skill) => {
                            return <li>{skill.name} </li>;
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
