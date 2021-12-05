import React from "react";
import "../styles/nav.scss";

const Nav = () => {
    return (
        <header>
            <nav className="header">
                <a href="#" className="nav__logo">
                    <img className="logo" alt="logo" src="./img/logo.svg"></img>
                </a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>{" "}
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link active-link">
                                <i className="uil uil-user nav__icon"></i> About
                                me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link active-link">
                                <i className="uil uil-file-info-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-analysis nav__icon"></i>
                                Qualification
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-files-landscapes nav__icon"></i>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" id="nav-close"></i>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
