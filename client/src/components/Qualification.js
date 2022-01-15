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
                <h2 className="qualification__content__title">
                    Qualification{" "}
                    <p className="qualification__content__subtitle">
                        {" "}
                        Qualification{" "}
                    </p>
                </h2>
                <p className="qualification__content__text">
                    {" "}
                    Tu trouveras ici ma scolarité et mon éxperiences
                </p>
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
                        <h2 className="qualification__items__title">
                            {" "}
                            Association, Force de vente
                        </h2>{" "}
                        <p className="qualification__items__text">
                            {" "}
                            aide à la gestion de l'association SEER / Force de
                            vente chez Yves Rocher
                        </p>
                    </div>
                    <div
                        className={
                            toggleState === 3
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2 className="qualification__items__title">
                            Assistante commercial
                        </h2>{" "}
                        <p className="qualification__items__text">
                            {" "}
                            Assistante commercial pour easySteelSheds,
                            Luxembourg
                        </p>
                    </div>
                    <div
                        className={
                            toggleState === 4
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2 className="qualification__items__title">
                            {" "}
                            Ecole O'clock
                        </h2>{" "}
                        <p className="qualification__items__text">
                            {" "}
                            Formation de 6 mois sur JS, Node et react{" "}
                        </p>
                    </div>
                    <div
                        className={
                            toggleState === 5
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2 className="qualification__items__title">
                            Titre pro{" "}
                        </h2>{" "}
                        <p className="qualification__items__text">
                            Obtention de mon titre professionnel 'Développeur
                            web et web mobile et Certification Opquast, maîtrise
                            de la qualité web
                        </p>
                    </div>
                    <div
                        className={
                            toggleState === 6
                                ? "qualification__items__content  active__items"
                                : "qualification__items__content"
                        }
                    >
                        <h2 className="qualification__items__title"> ddd</h2>{" "}
                        <p className="qualification__items__text">dsfed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
