import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
// import courses from "../data/courses.json";
// const COURSES = courses.map(
//     (course): Course => ({
//         ...course
//     })
// );
const SEASONS = ["Fall", "Winter", "Spring", "Summer"];
const DEFAULT_SEASON = SEASONS[0];

export function SemesterCreator(): JSX.Element {
    const [semesterSeason, setSemesterSeason] =
        useState<string>(DEFAULT_SEASON);
    const [semesterYear, setSemesterYear] = useState<string>("2022");
    const [semesterList, setSemesterList] = useState<Semester[]>([]);

    function addSemester(season: string, year: string) {
        const semesterId = season + " " + year;
        const newSemester = { id: semesterId, courses: [] };
        const newSemesterList = [...semesterList, newSemester];
        if (!semesterList.includes(newSemester)) {
            setSemesterList(newSemesterList);
        }
    }
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSemesterSeason(event.target.value);
    }
    function deleteSemester() {
        setSemesterList([]);
    }

    return (
        <div>
            <h3>Add Semester</h3>
            <Row className="semesterAdd">
                <Col>
                    <Form.Group
                        controlId="Semester"
                        className="semesterAddForm"
                    >
                        <Form.Label>Add Semester</Form.Label>
                        <Form.Select
                            value={semesterSeason}
                            onChange={updateSeason}
                        >
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                        </Form.Select>
                        <Form.Control
                            type="number"
                            value={semesterYear}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setSemesterYear(event.target.value)}
                        />
                        <Button
                            size="sm"
                            onClick={() =>
                                addSemester(semesterSeason, semesterYear)
                            }
                        >
                            Add
                        </Button>
                    </Form.Group>
                </Col>
                <Col className="semesterAddListDelete">
                    <strong>Semester:</strong>
                    <div className="semesterAddList">
                        {semesterList.map((semester: Semester) => (
                            <li
                                key={semester.id}
                                style={{
                                    display: "flex",
                                    height: "33px",
                                    border: "1px solid black"
                                }}
                            >
                                <Col>{semester.id} </Col>
                                <Col>
                                    <DropdownMenu
                                        buttons={[
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={1}
                                            >
                                                edit
                                            </Button>,
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={2}
                                            >
                                                delete
                                            </Button>,
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={3}
                                            >
                                                move
                                            </Button>,
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={4}
                                            >
                                                option1
                                            </Button>,
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={5}
                                            >
                                                option2
                                            </Button>,
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={6}
                                            >
                                                option3
                                            </Button>,
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={7}
                                            >
                                                option4
                                            </Button>
                                        ]}
                                    />
                                </Col>
                            </li>
                        ))}
                    </div>
                    <Button onClick={deleteSemester}>Delete Semester</Button>
                </Col>
            </Row>
        </div>
    );
}
