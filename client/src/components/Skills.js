import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../styles/Skills.scss";

const Skills = () => {
    const [skills, setSkills] = useState(true);

    const showSkills = () => {
        skills ? setSkills(false) : setSkills(true);
    };
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level </span>
            <div className="skills__container container grid">
                <div className="skills__contain">
                    <div class="skills__content  ">
                        <div class="skills__header" onClick={showSkills}>
                            <Icon icon="uil:apps" className="skills__icon" />
                            <div>
                                <h1 className="skills__title">
                                    Frontend developer
                                </h1>
                                <span className="skills__subtitle">
                                    O'clock formation
                                </span>
                            </div>
                            <div className="skills__arrow">
                                {skills ? (
                                    <Icon icon="uil:angle-up" />
                                ) : (
                                    <Icon icon="uil:angle-down" />
                                )}
                            </div>
                        </div>

                        <div
                            className={`grid ${
                                skills
                                    ? "skills__list" && "skills__close"
                                    : "skills__open"
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
                    <div className="skills__content  ">
                        <div className="skills__header">
                            <Icon
                                icon="uil:database-alt"
                                className="skills__icon"
                            />
                            <div>
                                <h1 className="skills__title">
                                    Backend developer
                                </h1>
                                <span className="skills__subtitle">
                                    O'clock formation
                                </span>
                            </div>
                            <Icon
                                icon="uil:angle-up"
                                className="skills__arrow"
                            />
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">NODE js</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PostgreSQL</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">mongoDB</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Express</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Postman</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__content  ">
                        <div className="skills__header">
                            <Icon icon="uil:screw" className="skills__icon" />
                            <div>
                                <h1 className="skills__title">TOOLS</h1>
                                <span className="skills__subtitle">
                                    O'clock formation
                                </span>
                            </div>
                            <Icon
                                icon="uil:angle-up"
                                className="skills__arrow"
                            />
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">VS code</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">GIT</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Github</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Trello</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Whimsical</h3>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Figma</h3>
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
                            </div>{" "}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Da Vinci</h3>
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
