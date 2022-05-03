import React from "react";
import { Semester, Course } from "../interfaces/projectInterfaces";
import { Col, Row } from "react-bootstrap";
import CourseDisplay from "./CourseDisplay";

function SingleSemester({ id, courses }: Semester): JSX.Element {
    const totalCredits = courses
        .map((course: Course) => course.credits)
        .reduce((prev, current) => prev + current, 0);
    return (
        <Col className="col1">
            <Row className="row1">
                {id} <br />
                Total Credits: {totalCredits} <br />
                {courses.length === 0
                    ? "This Semester currently has no courses! Select it from the semester menu and open the courses menu to add some!"
                    : courses.length +
                      " Course" +
                      (courses.length != 1 ? "s" : "")}
            </Row>
            {courses.map(({ id, title, credits, enrolled }: Course) => (
                <Row className="row1" key={id}>
                    <CourseDisplay
                        id={id}
                        title={title}
                        credits={credits}
                        enrolled={enrolled}
                    />
                </Row>
            ))}
        </Col>
    );
}
export default SingleSemester;
