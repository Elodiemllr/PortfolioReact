import { useState } from "react";
import "../styles/Qualification.scss";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <div className="qualification__content">
                <h2 className="qualification__content__title">Qualification</h2>
                <p className="qualification__content__text">
                    {" "}
                    Tu trouveras ici ma scolarité et mon éxperiences
                </p>
                <div className="qualification__content__subtitle">
                    {" "}
                    Qualification{" "}
                </div>
            </div>
            <div>
                <div className="qualification__container">
                    <div className="qualification__container__bloc">
                        <button
                            className={
                                toggleState === 1
                                    ? "qualification__container__tabsActive"
                                    : "qualification__container__tabs"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            2016
                        </button>
                        <button
                            className={
                                toggleState === 2
                                    ? "qualification__container__tabsActive"
                                    : "qualification__container__tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            2018
                        </button>
                        <button
                            className={
                                toggleState === 3
                                    ? "qualification__container__tabsActive"
                                    : "qualification__container__tabs"
                            }
                            onClick={() => toggleTab(3)}
                        >
                            2019
                        </button>
                        <button
                            className={
                                toggleState === 4
                                    ? "qualification__container__tabsActive"
                                    : "qualification__container__tabs"
                            }
                            onClick={() => toggleTab(4)}
                        >
                            2020
                        </button>

                        <button
                            className={
                                toggleState === 5
                                    ? "qualification__container__tabsActive"
                                    : "qualification__container__tabs"
                            }
                            onClick={() => toggleTab(5)}
                        >
                            2021
                        </button>
                    </div>
                </div>
                <div className="qualification__items">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2 className="qualification__items__title">
                            {" "}
                            Lycée Maryse Bastié
                        </h2>{" "}
                        <p className="qualification__items__text">
                            {" "}
                            Bac pro Accueil relation client et usagers
                        </p>
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2> s</h2> <p> s</p>
                    </div>
                    <div
                        className={
                            toggleState === 3
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2> d</h2> <p> d</p>
                    </div>
                    <div
                        className={
                            toggleState === 4
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2> sssd</h2> <p> ssd</p>
                    </div>
                    <div
                        className={
                            toggleState === 5
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2> d</h2>{" "}
                        <span className="qualification__items__content__span">
                            {" "}
                            date
                        </span>{" "}
                        <p> d</p>
                    </div>
                    <div
                        className={
                            toggleState === 6
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2> ddd</h2> <p> dsfed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
