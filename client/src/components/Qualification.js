import React, { useState } from "react";
import { Timeline } from "react-beautiful-horizontal-timeline";
import Datas from "../data.js";
import "../styles/Qualification.scss";

const myList = Datas.items.map((items) => {
    return [
        <div class="cd-h-timeline__event-content container">
            <h2 class="cd-h-timeline__event-title">{items.title}</h2>
            <em class="cd-h-timeline__event-date">{items.cardTitle}</em>
            <p class="cd-h-timeline__event-description color-contrast-medium">
                {items.cardDetailedText}
            </p>
        </div>,
    ];
});

const Qualification = () => {
    const [labelWidth, setlabelWidth] = useState(240);
    const [amountMove, setamountMove] = useState(350);
    const [lineColor, setlineColor] = useState("#010101");
    const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
    const [showSlider, setshowSlider] = useState(true);
    const [arrowsSize, setarrowsSize] = useState(false);
    return (
        <section className="qualification section" id="qualification">
            <div className="qualification__content">
                <h2>Qualification</h2>
                <p className="qualification__content__text">
                    {" "}
                    Tu trouveras ici ma scolarité et mon éxperiences
                </p>
                <div className="qualification__content__title">
                    {" "}
                    Qualification{" "}
                </div>
            </div>

            {/*Timeline */}
            <div className="cd-h-timeline  margin-bottom-md">
                {/*fin du Timeline container */}
                {/*début timeline events */}
                <div class="cd-h-timeline__events">
                    <ol>
                        <li class="cd-h-timeline__event cd-h-timeline__event--selected text-component">
                            <div class="cd-h-timeline__event-content container">
                                <h2 class="cd-h-timeline__event-title">
                                    Horizontal Timeline
                                </h2>
                                <em class="cd-h-timeline__event-date">
                                    January 16th, 2014
                                </em>
                                <p class="cd-h-timeline__event-description color-contrast-medium">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Illum praesentium officia,
                                    fugit recusandae ipsa, quia velit nulla
                                    adipisci? Consequuntur aspernatur at, eaque
                                    hic repellendus sit dicta consequatur quae,
                                    ut harum ipsam molestias maxime non nisi
                                    reiciendis eligendi! Doloremque quia
                                    pariatur harum ea amet quibusdam quisquam,
                                    quae, temporibus dolores porro doloribus.
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <Timeline
                myList={myList}
                labelWidth={labelWidth}
                amountMove={amountMove}
                lineColor={lineColor}
                eventTextAlignCenter={eventTextAlignCenter}
                showSlider={showSlider}
                arrowsSize={arrowsSize}
            ></Timeline>
        </section>
    );
};

export default Qualification;
