import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

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
    const [enrolled, setEnrolled] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function updateStatus() {
        setEnrolled(!enrolled);
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
