import React from "react";
import { Course } from "../interfaces/projectInterfaces";

function CourseDisplay(course: Course): JSX.Element {
    const { id, title, credits, enrolled } = course;
    return (
        <div>
            {title}: <br />
            {id} <br />
            {credits} Credits
            <br />
            {(enrolled ? "C" : "Not c") + "urrently enrolled"} <br />
        </div>
    );
}

export default CourseDisplay;
