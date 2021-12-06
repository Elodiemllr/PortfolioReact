import { Icon } from "@iconify/react";
import React from "react";
import "../styles/Qualification.scss";

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">
                Found here my education and work qualification
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className="
                        qualification__button
                        button--flex
                        qualification__active
                    "
                        data-target="#education"
                    >
                        <Icon
                            icon="uil:graduation-cap"
                            className="qualification__icon"
                        />
                        Education
                    </div>

                    <div
                        className="qualification__button button--flex"
                        data-target="#work"
                    >
                        <Icon icon="uil:bag" className="qualification__icon" />
                        Work
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className="qualification__content qualification__active"
                        data-content
                        id="education"
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Spécialisation React
                                </h3>

                                <div className="qualification__calendar">
                                    <Icon
                                        icon="uil:calender"
                                        className="qualification__icon"
                                    />
                                    2021
                                </div>
                            </div>

                            <div className="round">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div> </div>
                            <div className="round">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div id="education__info">
                                <h3 className="qualification__title">
                                    Formation développeur web et web mobile
                                </h3>

                                <div className="qualification__calendar">
                                    <Icon
                                        icon="uil:calender"
                                        className="qualification__icon"
                                    />
                                    2020-2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    BAC accueil relations client et usager
                                </h3>
                                <span className="qualification__subtitle">
                                    Maryse Bastié, Hayange
                                </span>
                                <div className="qualification__calendar">
                                    <Icon
                                        icon="uil:calender"
                                        className="qualification__icon"
                                    />
                                    2016
                                </div>
                            </div>

                            <div className="round">
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="qualification__content qualification"
                        data-content
                        id="work"
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Assistance commercial
                                </h3>
                                <span className="qualification__subtitle">
                                    C2i Commerce, Luxembourg
                                </span>
                                <div className="qualification__calendar">
                                    <Icon
                                        icon="uil:calender"
                                        className="qualification__icon"
                                    />
                                    2019-2020
                                </div>
                            </div>

                            <div className="round">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className="round">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Force de vente
                                </h3>
                                <span className="qualification__subtitle">
                                    Metz, waves
                                </span>
                                <div className="qualification__calendar">
                                    <Icon
                                        icon="uil:calender"
                                        className="qualification__icon"
                                    />
                                    2018
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Secrétaire commercial Auto Ecole
                                </h3>
                                <span className="qualification__subtitle">
                                    Nancy
                                </span>
                                <div className="qualification__calendar">
                                    <Icon
                                        icon="uil:calender"
                                        className="qualification__icon"
                                    />
                                    2017
                                </div>
                            </div>

                            <div className="round">
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
