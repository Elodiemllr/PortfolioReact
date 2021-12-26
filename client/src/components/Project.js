import React from "react";
import { Button } from "semantic-ui-react";
import "../styles/Project.scss";

const Project = () => {
    return (
        <>
            {/*project 1 */}
            <div className="project " id="project">
                <div className="project__content1">
                    {" "}
                    blanc
                    <img src="./img/test.png" alt="test" />
                    <div className="project__text1">
                        <p> blabla </p>
                        <h3> title </h3>
                        <Button className="project__button" primary>
                            <a href="#">Github</a>
                        </Button>{" "}
                        <Button className="project__button" secondary>
                            {" "}
                            <a href="#">Site web</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/*project 2 */}
            <div className="project2  " id="project">
                <div className="project2__content2">
                    <img src="./img/test.png" alt="test" />
                    <div className="project2__text2">
                        <p> blabla </p>
                        <h3> title </h3>
                        <Button className="project2__button" primary>
                            <a href="#">Github</a>
                        </Button>{" "}
                        <Button className="project2__button" secondary>
                            {" "}
                            <a href="#">Site web</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/*project 3 */}
            <div className="project3 " id="project">
                <div className="project3__content3">
                    <img src="./img/test.png" alt="test" />
                    <div className="project3__text3">
                        <p> blabla </p>
                        <h3> title </h3>
                        <Button className="project3__button" primary>
                            <a href="#">Github</a>
                        </Button>{" "}
                        <Button className="project3__button" secondary>
                            {" "}
                            <a href="#">Site web</a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Project;
