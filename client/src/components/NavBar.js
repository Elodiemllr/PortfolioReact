import React, { useState } from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    const [moveMenu, setMoveMenu] = useState(false);

    const showMoveMenu = () => {
        setMoveMenu(!moveMenu);
    };

    return (
        <div className={` ${moveMenu ? "test " : "navBar"}`}>
            <div
                className="navBar__content"
                onMouseEnter={showMoveMenu}
                onMouseLeave={showMoveMenu}
            >
                <div className="navBar__lines">
                    <div className="navBar__line" id="top"></div>
                    <div className="navBar__line" id="center"></div>
                    <div className="navBar__line" id="bottom"></div>
                </div>
                <div className="navBar__title">
                    <p> Menu </p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
