import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BallotIcon from "@mui/icons-material/Ballot";
import BrushIcon from "@mui/icons-material/Brush";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SendIcon from "@mui/icons-material/Send";
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
                                <HomeIcon className="nav__icon" /> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link active-link">
                                <PermIdentityIcon className="nav__icon" /> About
                                me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link active-link">
                                <BrushIcon className="nav__icon" />
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <AutoGraphIcon className="nav__icon" />
                                Qualification
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link">
                                <BallotIcon className="nav__icon" />
                                Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">
                                <SendIcon className="nav__icon" />
                                Contact
                            </a>
                        </li>
                    </ul>
                    <CloseIcon className="nav__close" id="nav-close" />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
