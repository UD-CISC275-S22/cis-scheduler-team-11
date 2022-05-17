import React from "react";
import { Semester, Plan } from "../interfaces/projectInterfaces";
import { Container } from "react-bootstrap";
import SingleSemester from "./SingleSemester";

function MultipleSemester({ plan }: { plan: Plan }): JSX.Element {
    return (
        <Container className="MultSemHead">
            <p style={{ color: "white" }}>
                {"Currently displaying plan: " + plan.id}
            </p>
            {plan.semesters.map((years: Semester[]) =>
                years.map(({ id, courses }: Semester) => (
                    <SingleSemester id={id} courses={courses} key={id} />
                ))
            )}
        </Container>
    );
}
export default MultipleSemester;
