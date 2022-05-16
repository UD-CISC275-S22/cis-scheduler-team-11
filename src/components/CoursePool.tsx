import React, { useState } from "react";
import { Course } from "../interfaces/projectInterfaces";
import { Stack } from "react-bootstrap";

const COURSEPOOL = [
    //Complete list of every course in order of department (see catalog.json)
    {
        code: "test",
        name: "test",
        descr: "I couldn't figure out another way to type this variable properly",
        credits: "1",
        preReq: "nothing",
        restrict: "nothing",
        breadth: "nothing",
        typ: "pool",
        uid: 3
    }
];

export function CoursePool(): JSX.Element {
    const [isShown, setIsShown] = useState(false);
    return (
        <Stack className="CoursePool">
            <div
                style={{
                    color: "white"
                }}
            >
                <h2>Course Pool:</h2>
                Add courses that you may want to take to the course pool. You
                can then add a course to your selected semester
            </div>
            <br></br>
            {COURSEPOOL.map((course: Course) => (
                <li
                    className="CoursePoolList"
                    key={course.code}
                    style={{
                        display: "flex",
                        height: "33px",
                        border: "2px solid white",
                        color: "white",
                        backgroundColor: isShown ? "#87ceeb" : "#f0bc95 "
                    }}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    {course.name}
                </li>
            ))}
        </Stack>
    );
}
