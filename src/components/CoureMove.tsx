import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Semester /*, Course*/ } from "../interfaces/projectInterfaces";

export function CourseMove({
    show,
    handleClose,
    semester,
    semesters,
    setSemesters,
    selectSemester
}: {
    show: boolean;
    handleClose: () => void;
    semester: Semester;
    semesters: Semester[];
    setSemesters: (semester: Semester[]) => void;
    selectSemester: (semester: Semester) => void;
}) {
    const [ID, setID] = useState<string>(semester.id);

    function saveChanges(index: number) {
        const newSemesters = semesters.map(
            (semester: Semester): Semester => ({ ...semester })
        ); //add alert
        newSemesters[index] = { ...newSemesters[index], id: ID };
        if (
            newSemesters.filter((asemester: Semester) => asemester.id == ID)
                .length > 1
        ) {
            alert("A semester with that ID already exists");
        } else if (parseInt(newSemesters[index].id.split(" ")[1]) > 4444) {
            alert("Semester year must be within the next 2 milenia");
        } else {
            //console.log(newSemesters);
            setSemesters(newSemesters);
            selectSemester(newSemesters[index]);
            handleClose();
        }
    }
    function refresh() {
        setID(semester.id);
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            onShow={refresh}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="formSemesterSeason" as={Row}>
                    <Form.Label>Semester Season:</Form.Label>
                    <Col>
                        <Form.Label>Add Semester</Form.Label>
                        <Form.Select
                            value={ID.split(" ")[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                                setID(
                                    event.target.value + " " + ID.split(" ")[1]
                                )
                            }
                        >
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group controlId="formSemesterYear" as={Row}>
                    <Form.Label>Semester Year:</Form.Label>
                    <Col>
                        <Form.Control
                            value={ID.split(" ")[1]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                setID(
                                    ID.split(" ")[0] + " " + event.target.value
                                )
                            }
                            type="number"
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close!
                </Button>
                <Button
                    variant="primary"
                    onClick={() =>
                        saveChanges(
                            semesters.findIndex(
                                (aSemester: Semester) =>
                                    aSemester.id === semester.id
                            )
                        )
                    }
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
