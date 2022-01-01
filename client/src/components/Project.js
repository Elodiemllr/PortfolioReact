import React, { useState } from "react";
import { animated, interpolate, useSprings } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";
import Datas from "../data.js";
import "../styles/Project.scss";

console.log(Datas);

const project = Datas.map((project) => {
    return project;
});
console.log(project);

// BACKGROUND GRADIENT & SECTION CONTAINER
const PhoneSection = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-size: 800% 800%;
`;

const Project = () => {
    // HELPERS
    const to = (i) => ({
        x: i * 30,
        y: i * -30,
        scale: 1,
        rot: 10 + Math.random() * 30,
        delay: i * 200,
    });
    const from = (i) => ({ x: 0, rot: 100, scale: 1.6, y: -1000 });
    const trans = (r, s) =>
        `perspective(1500px) rotateX(30deg) rotateY(${
            r / 10
        }deg) rotateZ(${r}deg) scale(${s})`;

    // MAIN LOGIC
    const [gone] = useState(() => new Set()); // When a phone is removed, it is stored here
    const [props, set] = useSprings(project.length, (i) => ({
        ...to(i),
        from: from(i),
    }));
    // create a spring for every Phone Item in the FILO stack (First In Last Out)
    const bind = useGesture(
        ({
            args: [index],
            down,
            delta: [xDelta],
            distance,
            direction: [xDir],
            velocity,
        }) => {
            const trigger = velocity > 0.9; // this number determines speed we have to "flick" to make the phone actually fly out
            const dir = xDir < 0 ? -1 : 1; // You can only flick left or right
            if (!down && trigger) gone.add(index); // if they release holding the phone AND the speed is greater than the trigger, mark the phone as "gone" aka removed from screen
            set((i) => {
                if (index !== i) return; // make sure we only affect the current phone and not another phone in the stack
                const isGone = gone.has(index); // if the current phone is "Gone" set isGone to true
                const x = isGone
                    ? (200 + window.innerWidth) * dir
                    : down
                    ? xDelta
                    : 0; // if a phone "isGone" it flies out left or right, otherwise it resets to the starting position.
                const rot = xDelta / 100 + (isGone ? dir * 200 * velocity : 0); // set the phone tilt angle to increase the faster they flick the phone
                const scale = down ? 1.1 : 1; // the top phone should hover above the other phones since it is active
                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: {
                        friction: 50,
                        tension: down ? 800 : isGone ? 200 : 500,
                    },
                };
            });
            if (!down && gone.size === project.length) {
                setTimeout(() => gone.clear() || set((i) => to(i)), 600);
            }
        }
    );
    let phones = props.map(({ x, y, rot, scale }, i) => (
        <animated.div
            key={i}
            style={{
                transform: interpolate(
                    [x, y],
                    (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
            }}
            id="PhoneLocation" // styling referenced in PhoneStack.css
        >
            {" "}
            {/* Bind user's gesture to the phone and inject the index to keep track of which phone is which */}
            <animated.div
                {...bind(i)}
                style={{
                    transform: interpolate([rot, scale], trans),
                    backgroundImage: `url(${project[i].image})`,
                    position: "relative",
                }}
                id="PhoneScreen" // styling referenced in PhoneStack.css
            >
                <div className="phonecontent">
                    <h1> {project[i].name}</h1>
                    <button type="button" class="btn btn-dark">
                        {" "}
                        <a href={project[i].github}>Site web</a>
                    </button>
                </div>
            </animated.div>
        </animated.div>
    ));
    return (
        <>
            {" "}
            <div className="content" id="project">
                <h2>My portfolio</h2>
                <p className="content__text">
                    {" "}
                    J'ai eu l'occasion de réaliser plusieurs projets pendant et
                    après ma formation. Je vous invite à en découvrir quelques
                    uns{" "}
                </p>
                <div className="content__work"> work </div>
            </div>
            <PhoneSection>{phones}</PhoneSection>{" "}
        </>
    );
};

export default Project;
