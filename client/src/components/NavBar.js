import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    const [moveMenu, setMoveMenu] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const showMoveMenu = () => {
        setMoveMenu(!moveMenu);
    };

    const showMenu = () => {
        setShowNav(!showNav);
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
                <div>
                    <Icon
                        icon="ant-design:close-outlined"
                        className="nav__close"
                        id="nav-close"
                    />
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                Work
                                <a href="#"> Work 1</a>
                                <a href="#"> Work 2</a>
                                <a href="#"> Work 3</a>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
