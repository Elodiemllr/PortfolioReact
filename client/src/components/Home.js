import { Icon } from "@iconify/react";
import React from "react";
import { animated, useSpring } from "react-spring";
import "../styles/Home.scss";
import videoElodie from "../video/videoElo.mp4";

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Home = () => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 2, tension: 10, friction: 20 },
    }));
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__spacer"> </div>{" "}
                <animated.div
                    class="card"
                    onMouseMove={({ clientX: x, clientY: y }) =>
                        set({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <video
                        width="auto"
                        height="auto"
                        autoPlay
                        loop="true"
                        muted
                    >
                        <source src={videoElodie} type="video/mp4" />
                    </video>
                </animated.div>
                <div className="home__spacer"> </div>
                <a
                    href="#project"
                    className="home__scroll__button button--flex"
                >
                    <Icon
                        icon="iconoir:mouse-scroll-wheel"
                        className="home__scroll__arrow"
                    />
                </a>
            </div>
        </section>
    );
};

export default Home;
