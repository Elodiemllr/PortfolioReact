import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
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
                                <Nav />
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
