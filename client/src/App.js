import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from "react-swipeable";
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

function App() {
    const [padding, setPadding] = useState(0);
    const [index, setIndex] = useState(0);
    const [showAnim, setShowAnim] = useState(false);

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            console.log("User Swiped!", eventData);
            if (eventData.dir === "Up") {
                if (index === 7) {
                    return false;
                }
                let newidnex = index + 1;
                setIndex(newidnex);
                setPadding(newidnex * window.innerHeight);
            }
            if (eventData.dir === "Down") {
                if (index === 0) {
                    return false;
                }
                let newidnex = index - 1;
                setIndex(newidnex);
                setPadding(newidnex * window.innerHeight);
            }
        },
        onSwiping: (eventData) => {
            if (index === 7 && eventData.dir === "up") {
                return;
            }
            if (eventData.first && eventData.dir === "Down") {
                return;
            }
            if (index !== 0 && eventData.dir === "Down") {
                setPadding(index * window.innerHeight - eventData.absY);
            }
            if (index !== 7 && eventData.dir === "Up") {
                setPadding(index * window.innerHeight + eventData.absY);
            }
        },
    });

    const setAnimation = () => {
        setShowAnim(true);
        setTimeout(() => {
            setShowAnim(false);
        }, 400);
    };

    return (
        <div className="App">
            <Banner />
            <NavBar />
            <SocialMedia />

            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                {window.innerWidth < 756 && (
                                    <div
                                        className="ScrollContainer__scroller--1tTge"
                                        style={{
                                            transitionTimingFunction: "ease",
                                            willChange: "transform",
                                            transitionDuration: showAnim
                                                ? "400ms"
                                                : "0ms",
                                            transform:
                                                "translate(0px, -0" +
                                                padding +
                                                "px) translateZ(0px)",
                                        }}
                                        id="container"
                                        {...handlers}
                                    >
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
                                    </div>
                                )}
                                {window.innerWidth > 756 && (
                                    <ReactScrollWheelHandler
                                        preventScroll={true}
                                        upHandler={(e) => {
                                            if (index === 7) {
                                                return false;
                                            }
                                            let newidnex = index + 1;
                                            setIndex(newidnex);
                                            setPadding(
                                                newidnex * window.innerHeight
                                            );
                                            setAnimation();
                                        }}
                                        downHandler={(e) => {
                                            if (index === 0) {
                                                return false;
                                            }
                                            let newidnex = index - 1;
                                            setIndex(newidnex);
                                            setPadding(
                                                newidnex * window.innerHeight
                                            );
                                            setAnimation();
                                        }}
                                    >
                                        <div
                                            className="ScrollContainer__scroller--1tTge"
                                            style={{
                                                transitionTimingFunction:
                                                    "ease",
                                                willChange: "transform",
                                                transitionDuration: showAnim
                                                    ? "500ms"
                                                    : "0ms",
                                                transform:
                                                    "translate(0px, -0" +
                                                    padding +
                                                    "px) translateZ(0px)",
                                            }}
                                            id="container"
                                            {...handlers}
                                        >
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
                                        </div>{" "}
                                    </ReactScrollWheelHandler>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
