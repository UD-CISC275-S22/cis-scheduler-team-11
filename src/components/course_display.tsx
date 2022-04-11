import React from "react";
import { Course } from "../interfaces/course";

function display({ id, title, credits, status }: Course): JSX.Element {
    //const { id, title, credits, status } = course;
    return (
        <div>
            {title} {id} <br />
            {credits} Credits
            <br />
            Status: {status};<br />
        </div>
    );
}

export default display;
