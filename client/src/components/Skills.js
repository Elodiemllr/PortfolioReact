import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../styles/Skills.scss";

const Skills = () => {
    const [skills, setSkills] = useState(true);

    const showSkills = (e) => {
        skills ? setSkills(false) : setSkills(true);
    };
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level </span>
            <div className="skills__container container grid">
                <div className="skills__contain">
                    <div
                        class={`skills__content ${
                            skills
                                ? "skills__list" && "skills__close"
                                : "skills__open"
                        }`}
                        id="front"
                        onClick={showSkills}
                    >
                        <div class="skills__header">
                            <Icon icon="uil:apps" className="skills__icon" />
                            <div>
                                <h1 className="skills__title">
                                    Frontend developer
                                </h1>
                                <span className="skills__subtitle">
                                    O'clock formation
                                </span>{" "}
                            </div>
                            {skills ? (
                                <Icon
                                    icon="uil:angle-up"
                                    className="skills__arrow"
                                />
                            ) : (
                                <Icon
                                    icon="uil:angle-down"
                                    className="skills__arrow"
                                />
                            )}
                        </div>

                        <div
                            className={` ${
                                skills ? "skills__list" : "skills__list__show"
                            }`}
                        >
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">javaScript</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class={`skills__content ${
                            skills
                                ? "skills__list" && "skills__close"
                                : "skills__open"
                        }`}
                        id="front"
                        onClick={showSkills}
                    >
                        <div class="skills__header">
                            <Icon icon="uil:apps" className="skills__icon" />
                            <div>
                                <h1 className="skills__title">
                                    Backend developer
                                </h1>
                                <span className="skills__subtitle">
                                    O'clock formation
                                </span>{" "}
                            </div>
                            {skills ? (
                                <Icon
                                    icon="uil:angle-up"
                                    className="skills__arrow"
                                />
                            ) : (
                                <Icon
                                    icon="uil:angle-down"
                                    className="skills__arrow"
                                />
                            )}
                        </div>

                        <div
                            className={` ${
                                skills ? "skills__list" : "skills__list__show"
                            }`}
                        >
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node js</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Express</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Mongo db</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Postgresql</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Postman</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class={`skills__content ${
                            skills
                                ? "skills__list" && "skills__close"
                                : "skills__open"
                        }`}
                        id="front"
                        onClick={showSkills}
                    >
                        <div class="skills__header">
                            <Icon icon="uil:apps" className="skills__icon" />
                            <div>
                                <h1 className="skills__title">TOOLS</h1>
                                <span className="skills__subtitle">
                                    O'clock formation
                                </span>{" "}
                            </div>
                            {skills ? (
                                <Icon
                                    icon="uil:angle-up"
                                    className="skills__arrow"
                                />
                            ) : (
                                <Icon
                                    icon="uil:angle-down"
                                    className="skills__arrow"
                                />
                            )}
                        </div>

                        <div
                            className={` ${
                                skills ? "skills__list" : "skills__list__show"
                            }`}
                        >
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Vs code</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Git</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">github</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">trello</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">whimsical</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma </h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name"> Davinci </h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Canva</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Gimp</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
