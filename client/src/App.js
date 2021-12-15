import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import Banner from "./components/Banner.js";
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import Qualification from "./components/Qualification.js";
import Skills from "./components/Skills.js";
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
                                <main className="main">
                                    <Home />
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
