import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/Plan";

export function EditSemester({
    changeEditing,
    plan,
    editPlan,
    deletePlan
}: {
    changeEditing: () => void;
    plan: Plan;
    editPlan: (id: number, newPlan: Plan) => void;
    deletePlan: (id: number) => void;
}): JSX.Element {
    const [enrolled, setEnrolled] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function updateStatus() {
        setEnrolled(!enrolled);
    }
    function save() {
        editPlan(plan.id, {
            ...plan
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
                        onClick={() => deletePlan(plan.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Plan
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
