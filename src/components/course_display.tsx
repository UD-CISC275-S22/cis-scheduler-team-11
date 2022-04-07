import React from "react";
import { Course } from "../interfaces/course";

function course_display(course: Course): JSX.Element {
    const { id, title, credits, status } = course;
    return (
        <div>
            {title} {id} <br />
            {credits} Credits
            <br />
            Status: {status};<br />
        </div>
    );
}

export default course_display;
