import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../styles/nav.scss";
const Nav = () => {
    //afficher le menu burger
    const [toggleMenu, setToggleMenu] = useState(false);
    const [displayIcon, setDisplayIcon] = useState(false);

    // au click sur  mon button, si toggleMenu est à true alors je le passe à false, et inversement
    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
        displayIcon ? setDisplayIcon(false) : setDisplayIcon(true);
    };
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img
                        className="nav__elodie"
                        alt="logo"
                        src="./img/logo.svg"
                    ></img>
                </a>
                <div
                    className={`nav ${
                        toggleMenu ? "nav__menu" : "nav__menu" && "show-menu"
                    }`}
                >
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <Icon
                                    icon="akar-icons:home"
                                    className="nav__icon"
                                />{" "}
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link active-link">
                                <Icon icon="uil:user" className="nav__icon" />
                                About me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link active-link">
                                <Icon
                                    icon="uil:file-info-alt"
                                    className="nav__icon"
                                />
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <Icon
                                    icon="uil:analysis"
                                    className="nav__icon"
                                />
                                Qualification
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link">
                                <Icon
                                    icon="uil:files-landscapes"
                                    className="nav__icon"
                                />
                                Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">
                                <Icon
                                    icon="uil:message"
                                    className="nav__icon"
                                />
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__btns">
                    <Icon
                        icon="emojione-monotone:first-quarter-moon"
                        className="nav__changetheme"
                        id="theme-button"
                    />
                    <div
                        class="nav__toggle"
                        id="nav-toggle"
                        onClick={handleClick}
                    >
                        {" "}
                        {displayIcon ? (
                            <Icon icon="uil:apps" />
                        ) : (
                            <Icon
                                icon="ant-design:close-outlined"
                                className="nav__close"
                                id="nav-close"
                            />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
