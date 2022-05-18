import React from "react";
import { Semester, Plan } from "../interfaces/projectInterfaces";
import { Container } from "react-bootstrap";
import SingleSemester from "./SingleSemester";
import { Row } from "react-bootstrap";

function MultipleSemester({ plan }: { plan: Plan }): JSX.Element {
    return (
        <Container className="MultSemHead">
            <Row style={{ color: "white" }}>
                {"Currently Displaying Plan: " + plan.id}
            </Row>
            <Row>
                {plan.semesters.map((years: Semester[]) =>
                    years.map(({ id, courses }: Semester) => (
                        <SingleSemester id={id} courses={courses} key={id} />
                    ))
                )}
            </Row>
        </Container>
    );
}
export default MultipleSemester;
