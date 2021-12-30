import React from "react";
import Typical from "react-typical";
import "../styles/About.scss";
const About = () => {
    return (
        <div className="aboutsection">
            <div className="content">
                <h2>About me</h2>{" "}
                <div>
                    <p className="content__text">
                        Mes qualités :{" "}
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Sociable",
                                1000,
                                "joueuse de battle royale 😎",
                                1000,
                                "Enthousiaste",
                                1000,
                                "Organisée",
                                1000,
                                "Autonome",
                                1000,
                            ]}
                        >
                            {" "}
                        </Typical>
                    </p>
                </div>
                <div className="content__work"> work </div>
            </div>
            <section className="about section" id="about">
                <div className="about__img">
                    <img src="./img/elodie.jpg" alt="elodie" />
                </div>

                <div className="about__content">
                    <div className="about__sub">
                        <span className="about__subtitle">
                            Moi c'est Elodie, une jeune développeuse située au
                            Luxembourg, passionnée de communication,
                            programmation et design web.
                        </span>
                    </div>

                    <p className="about__description">
                        J'ai commencé mon parcours en tant que commerciale, mais
                        ma passion pour le design web et l'informatique m'a
                        poussé à reprendre des études. J'ai donc voulu découvrir
                        le monde de l'informatique et j'ai ainsi entrepris une
                        formation de six mois afin d'obtenir un diplôme de
                        développeur web et web mobile. ors de cette formation,
                        j'ai pu acquérir de solides connaissances informatiques
                        en réalisant diverses applications web et web mobile.
                        Cela m'a permis d'apprendre à maitriser plusieurs
                        langages comme html, css et javascript (dont node et
                        react).
                    </p>
                    <div className="about__info"></div>
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
            </section>
        </div>
    );
};
export default About;
