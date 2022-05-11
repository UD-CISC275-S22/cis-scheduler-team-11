import React from "react";
import { Semester, Course } from "../interfaces/projectInterfaces";
import { Col, Row } from "react-bootstrap";
import CourseDisplay from "./CourseDisplay";

function SingleSemester({ id, courses }: Semester): JSX.Element {
    const totalCredits = courses
        .map((course: Course) => parseInt(course.credits))
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
            {courses.map(
                ({
                    code,
                    name,
                    descr,
                    credits,
                    preReq,
                    restrict,
                    breadth,
                    typ,
                    uid
                }: Course) => (
                    <Row className="row1" key={code}>
                        <CourseDisplay
                            code={code}
                            name={name}
                            descr={descr}
                            credits={credits}
                            preReq={preReq}
                            restrict={restrict}
                            breadth={breadth}
                            typ={typ}
                            uid={uid}
                        />
                    </Row>
                )
            )}
        </Col>
    );
}
export default SingleSemester;
