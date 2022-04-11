import React from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Col, Container, Row } from "react-bootstrap";
//import { display } from "course_display";

function Single_Semester_Display({ id, courses }: Semester): JSX.Element {
    return (
        <div className="Single Semester">
            <div>
                <Container>
                    <Col>
                        {id}
                        {courses.map((course: Course) => (
                            <display key={course}> {course}</display>
                        ))}
                    </Col>
                </Container>
            </div>
        </div>
    );
}
export default Single_Semester_Display;
