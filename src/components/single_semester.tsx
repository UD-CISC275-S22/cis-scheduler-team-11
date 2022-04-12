import React from "react";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Col, Container, Row } from "react-bootstrap";
import course_display from "./course_display";

function Single_Semester_Display({ id, courses }: Semester): JSX.Element {
    return (
        <div className="Single Semester">
            <div>
                <Container>
                    <Col>
                        {/* {id}
                        {courses.map((course: Course) => (
                            <Row className="row1" key={course.id}>
                                <course_display course={course.id} />
                            </Row>
                        ))} */}
                    </Col>
                </Container>
            </div>
        </div>
    );
}
export default Single_Semester_Display;
