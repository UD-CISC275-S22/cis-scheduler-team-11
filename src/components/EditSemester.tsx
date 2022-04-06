import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

const STATUS = ["Not-Enrolled", "Enrolled", "Dropped", "Withdrew"];
const DEFAULT_STATUS = STATUS[0];

export function EditSemester({
    changeEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeEditing: () => void;
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    const [status, setStatus] = useState<string>(DEFAULT_STATUS);
    function updateStatus(event: React.ChangeEvent<HTMLSelectElement>) {
        setStatus(event.target.value);
    }
    function save() {
        editSemester(semester.id, {
            ...semester
        });
        changeEditing();
    }
    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="Change Status">
                        <Form.Label>Choose Status of Course</Form.Label>
                        <Form.Select value={status} onChange={updateStatus}>
                            {STATUS.map((state: string) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </Form.Select>
                        The Current Course Status is: {status};
                    </Form.Group>
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteSemester(semester.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Semester
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
