import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/projectInterfaces";
import { ClassPicker } from "../components/ClassPicker";
import { SemesterEditor } from "./SemesterEditor";
import { DropdownMenu } from "./DropdownMenu";

export function SemesterCreator(): JSX.Element {
    const [semesterSeason, setSemesterSeason] = useState<string>("Fall");
    const [semesterYear, setSemesterYear] = useState<string>("2022");
    const [semesterList, setSemesterList] = useState<Semester[]>([]);
    const [semester, setSemester] = useState<Semester>(semesterList[0]);
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);
    function addSemester(season: string, year: string) {
        const semesterId = season + " " + year;
        const newSemester = { id: semesterId, courses: [] };
        setSemester(newSemester);
        const newSemesterList = [...semesterList, newSemester];
        const check = semesterList.filter(({ id }) => id === semesterId);
        if (check.length === 0) {
            setSemesterList(newSemesterList);
        }
    }
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSemesterSeason(event.target.value);
    }
    function deleteSemester() {
        setSemesterList([]);
    }

    function deleteSpecificSemester(id: string) {
        setSemesterList(semesterList.filter((semester) => semester.id != id));
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
                                        horizontal={true}
                                        buttons={[
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={1}
                                                onClick={() =>
                                                    setShowAddModal(
                                                        !showAddModal
                                                    )
                                                }
                                            >
                                                edit
                                            </Button>,
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                key={2}
                                                onClick={() =>
                                                    deleteSpecificSemester(
                                                        semester.id
                                                    )
                                                }
                                            >
                                                delete
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
            <div>
                <SemesterEditor
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    semester={semester}
                    semesters={semesterList}
                    setSemesters={setSemesterList}
                ></SemesterEditor>
            </div>
        </div>
    );
}
