import { Icon } from "@iconify/react";
import React from "react";
import "../styles/About.scss";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">A propos de moi</h2>
            <span className="section__subtitle">
                Laissez moi me presenter ..{" "}
            </span>
            <div className="about__container container grid">
                <img src="./img/elodiecv.jpeg" alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Moi c'est Elodie, 24 ans. J'ai commencé mon parcours en
                        tant que commerciale, mais ma passion pour le design web
                        et l'informatique m'a poussé à reprendre des études.
                        J'ai donc voulu découvrir le monde de l'informatique et
                        j'ai ainsi entrepris une formation de six mois afin
                        d'obtenir un diplôme de développeur web et web mobile.
                        ors de cette formation, j'ai pu acquérir de solides
                        connaissances informatiques en réalisant diverses
                        applications web et web mobile. Cela m'a permis
                        d'apprendre à maitriser plusieurs langages comme html,
                        css et javascript (dont node et react).
                    </p>
                    <div className="about__info">
                        <div className="about__info__one">
                            <span className="about__info-title">
                                <Icon
                                    icon="uil:megaphone"
                                    className="about__icon"
                                />
                            </span>
                            <span className="about__info-name">
                                Je recherche actuellement de préference <br />
                                un contrat à durée indeterminé
                            </span>
                        </div>
                        <div className="about__info__one">
                            <span className="about__info-title">
                                <Icon
                                    icon="uil:compass"
                                    className="about__icon"
                                />
                            </span>
                            <span className="about__info-name">
                                Luxembourg <br />
                                Esch-sur-alzette
                            </span>
                        </div>
                        <div className="about__info__one">
                            <span className="about__info-title">
                                <Icon icon="uil:cog" className="about__icon" />
                            </span>
                            <span className="about__info-name">
                                Mongo Express React
                                <br />
                                javascript NodeJs
                            </span>
                        </div>
                    </div>
                    <br />
                    <div className="about__buttons">
                        <a
                            download=""
                            href="https://www.canva.com/design/DAExxQ715Qo/dYY_hdzcU7QxezoOi_vf4Q/view?utm_content=DAExxQ715Qo&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                            className="button button--flex"
                        >
                            Télecharge mon CV ici
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
