import React from "react";
import { Semester } from "../interfaces/projectInterfaces";
import { MultSemester } from "../interfaces/projectInterfaces";
import { Container } from "react-bootstrap";
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
