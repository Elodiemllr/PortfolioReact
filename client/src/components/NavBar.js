import React, { useState } from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    const [moveMenu, setMoveMenu] = useState(false);

    const showMoveMenu = () => {
        moveMenu ? setMoveMenu(false) : setMoveMenu(true);
    };
    return (
        <div className="navBar">
            <div
                className={`  ${moveMenu ? "navBar__content" : "test"}`}
                onMouseEnter={showMoveMenu}
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
