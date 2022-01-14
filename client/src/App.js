import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import Banner from "./components/Banner.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import Project from "./components/Project.js";
import Qualification from "./components/Qualification.js";
import Skills from "./components/Skills.js";
import SocialMedia from "./components/SocialMedia.js";
import "./styles/App.scss";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
    const slidetoTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                },
            }
        );
    };
    useEffect(() => {
        slidetoTop(".bg1");
    }, []);
    useEffect(() => {
        slidetoTop(".bg2");
    }, []);
    useEffect(() => {
        slidetoTop(".bg3");
    }, []);
    useEffect(() => {
        slidetoTop(".bg4");
    }, []);
    return (
        <div className="App">
            <div className="App__navigation">
                <Banner />
                <NavBar />
                <SocialMedia />
            </div>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <div className="App__content">
                                <div className="main bg">
                                    <Home />
                                </div>
                                <div className="main bg1 contenue">
                                    <Fragment>
                                        {" "}
                                        <Project />{" "}
                                    </Fragment>
                                </div>
                                <div className="main bg2 contenue">
                                    <About />
                                </div>
                                <div className="main bg3 contenue">
                                    <Skills />
                                </div>
                                <div className="main bg4 contenue">
                                    <Qualification />
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
