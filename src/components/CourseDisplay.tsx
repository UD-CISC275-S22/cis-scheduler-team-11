import React from "react";
import { Course } from "../interfaces/projectInterfaces";

function CourseDisplay(course: Course): JSX.Element {
    const { code, name, descr, credits, preReq, restrict, breadth, typ } =
        course;
    return (
        <div className="CourseDisplay">
            {code}: <br />
            {name} <br />
            {credits} Credits
            <br />
            {descr} <br />
            {breadth} <br />
            {typ} <br />
            {restrict} <br />
            {preReq} <br />
        </div>
    );
}

export default CourseDisplay;
