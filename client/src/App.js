import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Banner />
                                <NavBar />
                                <SocialMedia />
                                <main className="main">
                                    <Home />
                                    <Project />
                                    <About />
                                    <Skills />
                                    <Qualification />
                                    <Portfolio />
                                </main>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
