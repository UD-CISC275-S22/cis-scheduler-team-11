import React from "react";
import { Semester } from "../interfaces/Semester";
import { MultSemester } from "../interfaces/MultSemester";
import { Col, Container, Row } from "react-bootstrap";
import SingleSemester from "./SingleSemester";

function MultipleSemester({ semesters }: MultSemester): JSX.Element {
    return (
        <Container className="MultSemHead">
            {semesters.map(({ id, courses }: Semester) => (
                <SingleSemester id={id} courses={courses} key={id} />
            ))}
        </Container>
    );
}
export default MultipleSemester;
