import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HorizontalScroll from "react-scroll-horizontal";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import Banner from "./components/Banner.js";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar.js";
import Portfolio from "./components/Portfolio.js";
import Project from "./components/Project.js";
import Qualification from "./components/Qualification.js";
import Skills from "./components/Skills.js";
import SocialMedia from "./components/SocialMedia.js";
import "./styles/App.scss";
function App() {
    return (
        <div className="App">
            <Banner />
            <NavBar />
            <SocialMedia />

            <HorizontalScroll
                reverseScroll={true}
                config={{ stiffness: 100, damping: 15 }}
            >
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <div className="main bg">
                                        <Home />
                                    </div>
                                    <div className="main bg1">
                                        <Fragment>
                                            <Project />
                                        </Fragment>
                                    </div>
                                    <div className="main bg2">
                                        <About />
                                    </div>
                                    <div className="main bg3">
                                        <Skills />
                                    </div>
                                    <div className="main bg4">
                                        <Qualification />
                                    </div>
                                    <div className="main bg5">
                                        <Portfolio />
                                    </div>
                                </>
                            }
                        />
                    </Routes>
                </Router>
            </HorizontalScroll>
        </div>
    );
}

export default App;
