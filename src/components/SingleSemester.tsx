import React from "react";
import { Semester } from "../interfaces/projectInterfaces";
import { Course } from "../interfaces/projectInterfaces";
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
