import React from "react";
import "../styles/NavBar.scss";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__content">
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