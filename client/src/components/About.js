import React from "react";
import Typical from "react-typical";
import "../styles/About.scss";
const About = () => {
    return (
        <div className="aboutsection" id="about">
            <div className="aboutsection__header">
                <h2 className="aboutsection__title">
                    About me
                    <p className="aboutsection__subtitle"> About </p>
                </h2>{" "}
                <p className="aboutsection__header__text">
                    Mes qualités :&nbsp;
                    <Typical
                        loop={Infinity}
                        steps={[
                            " Sociable",
                            500,
                            " joueuse de battle royale",
                            500,
                            " Enthousiaste",
                            500,
                            " Organisée",
                            500,
                            " Autonome",
                            500,
                        ]}
                    >
                        {" "}
                    </Typical>
                </p>
            </div>
            <section className="about section" id="about">
                <div className="about__img">
                    <img src="./img/elodie.jpg" alt="elodie" />
                </div>
                <div className="about__infos">
                    <div className="about__content">
                        <div className="about__sub">
                            <span className="about__subtitle">
                                Moi c'est Elodie, passionnée de programmation et
                                design web.
                            </span>
                        </div>

                        <p className="about__description">
                            J'ai commencé mon parcours en tant que commerciale,
                            mais ma passion pour le design web et l'informatique
                            m'a poussé à reprendre des études. J'ai donc voulu
                            découvrir le monde de l'informatique et j'ai ainsi
                            entrepris une formation de six mois afin d'obtenir
                            un diplôme de développeur web et web mobile. ors de
                            cette formation, j'ai pu acquérir de solides
                            connaissances informatiques en réalisant diverses
                            applications web et web mobile. Cela m'a permis
                            d'apprendre à maitriser plusieurs langages comme
                            html, css et javascript (dont node et react).
                        </p>

                        <br />
                    </div>
                    <div className="about__buttons">
                        <a
                            download=""
                            href="https://www.canva.com/design/DAE1jV7GgYU/JCiSMNl1fx3doJIRF7lokw/view?utm_content=DAE1jV7GgYU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                            className="button button--flex"
                        >
                            Télecharge mon CV ici
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
