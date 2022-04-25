import React from "react";
import { Semester, Plan } from "../interfaces/projectInterfaces";
import { Container, Row } from "react-bootstrap";
import SingleSemester from "./SingleSemester";

function YearView(plan: Plan): JSX.Element {
    const years = plan.semesters;
    let year = 1;
    const yearSuffix = [
        "th",
        "st",
        "nd",
        "rd",
        "th",
        "th",
        "th",
        "th",
        "th",
        "th"
    ];
    return (
        <Container className="yearHead">
            {years.map(
                (semesters: Semester[]): JSX.Element => (
                    <Container key={year} className="yearSubHead">
                        <Row className="yearName">
                            {year + yearSuffix[year++ % 10] + " year:"}
                        </Row>
                        <br />
                        <Row className="MultSemHead2">
                            {semesters.map(({ id, courses }: Semester) => (
                                <SingleSemester
                                    id={id}
                                    courses={courses}
                                    key={id}
                                />
                            ))}
                        </Row>
                    </Container>
                )
            )}
        </Container>
    );
}
export default YearView;
