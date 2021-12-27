import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import Banner from "./components/Banner.js";
import Box from "./components/Box.js";
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
                                <Wrapper className="App">
                                    <Banner />
                                    <NavBar />
                                    <SocialMedia />
                                    <main className="main">
                                        <Home />
                                        <Canvas className="canvas">
                                            <OrbitControls enableZoom={false} />
                                            <ambientLight intensity={0.5} />
                                            <directionalLight
                                                position={[-2, 5, 2]}
                                                intensity={1}
                                            />
                                            <Box className="box" />
                                        </Canvas>
                                        <Project />
                                        <About />
                                        <Skills />
                                        <Qualification />
                                        <Portfolio />
                                    </main>
                                </Wrapper>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

const Wrapper = styled.div`
    canvas {
        height: 500px;
    }
`;

export default App;
