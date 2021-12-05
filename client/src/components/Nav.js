import { Icon } from "@iconify/react";
import React from "react";
import "../styles/nav.scss";
const Nav = () => {
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
                <div className="nav__menu">
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
                    <Icon
                        icon="ant-design:close-outlined"
                        className="nav__close"
                        id="nav-close"
                    />
                </div>
                <div className="nav__btns">
                    <Icon
                        icon="emojione-monotone:first-quarter-moon"
                        className="nav__changetheme"
                        id="theme-button"
                    />
                    <div class="nav__toggle" id="nav-toggle">
                        <Icon icon="uil:apps" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
