import React, { useState } from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    const [moveMenu, setMoveMenu] = useState(false);

    const showMoveMenu = () => {
        setMoveMenu(!moveMenu);
    };

    return (
        <div className={` ${moveMenu ? "navBarShow " : "navBar"}`}>
            <div
                className="navBar__content"
                onMouseEnter={showMoveMenu}
                onMouseLeave={showMoveMenu}
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
        </div>
    );
};

export default NavBar;
