import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/projectInterfaces";

export function SemesterCreator(): JSX.Element {
    const [semesterSeason, setSemesterSeason] = useState<string>("Fall");
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
    function deleteSemester(semester: Semester) {
        const newSemesterList = [...semesterList];
        newSemesterList.splice(1, newSemesterList.indexOf(semester));
        setSemesterList(newSemesterList);
    }
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSemesterSeason(event.target.value);
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
                    <strong>Semesters:</strong>
                    {semesterList.map((semester: Semester) => (
                        <div key={semester.id} style={{ marginBottom: "4px" }}>
                            {semester.id}{" "}
                            <Button
                                size="sm"
                                onClick={() => deleteSemester(semester)}
                            >
                                Delete Semester
                            </Button>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    );
}
