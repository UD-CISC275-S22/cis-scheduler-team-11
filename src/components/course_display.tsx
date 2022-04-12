import React from "react";
import { Course } from "../interfaces/course";

function course_display(course: Course): JSX.Element {
    const { id, title, credits, enrolled } = course;
    return (
        <div>
            {title} {id} <br />
            {credits} Credits
            <br />
            Status: {enrolled};<br />
        </div>
    );
}

export default course_display;
