import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/projectInterfaces";
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
            <Row>
                <Col>
                    <div className="semesterAdd">
                        <Form.Group controlId="Semester">
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
                    </div>
                </Col>
                <Col>
                    <strong>Semester:</strong>
                    {semesterList.map((semester: Semester) => (
                        <li key={semester.id}>{semester.id}</li>
                    ))}
                    <Button onClick={deleteSemester}>Delete Semester</Button>
                </Col>
            </Row>
        </div>
    );
}
