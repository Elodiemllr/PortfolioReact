import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    const [moveMenu, setMoveMenu] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const showMoveMenu = () => {
        moveMenu ? setMoveMenu(false) : setMoveMenu(true);
    };

    const showMenu = () => {
        showNav ? setShowNav(false) : setShowNav(true);
    };

    const initialState = () => {
        setMoveMenu(false);
        showNav ? setShowNav(false) : setShowNav(true);
    };

    return (
        <div
            className={` ${moveMenu ? "navBarShow " : "navBar"} ${
                showNav ? "showNav" : ""
            }`}
        >
            {!showNav ? (
                <div
                    className="navBar__content"
                    onMouseEnter={showMoveMenu}
                    onMouseLeave={showMoveMenu}
                    onClick={showMenu}
                >
                    <div className="navBar__lines">
                        <div className="navBar__line"></div>
                        <div
                            className={` ${
                                moveMenu ? "navBar__center" : "navBar__line"
                            }`}
                        ></div>
                        <div className="navBar__line"></div>
                    </div>
                    <div
                        className={` ${
                            moveMenu ? "  navBar__titleShow" : "navBar__title"
                        }`}
                    >
                        <p> Menu </p>
                    </div>
                </div>
            ) : (
                <div className="menu">
                    <Icon
                        icon="ant-design:close-outlined"
                        className="menu__close"
                        id="nav-close"
                        onClick={initialState}
                    />
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#project" className="menu__link">
                                Work
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="menu__link">
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="menu__link">
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#qualification"
                                className="menu__link"
                                id="nav__cat"
                            >
                                Qualification
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
