import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
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
