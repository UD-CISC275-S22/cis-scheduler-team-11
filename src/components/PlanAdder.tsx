import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";

export function PlanAdder({
    show,
    handleClose,
    addPlan
}: {
    show: boolean;
    handleClose: () => void;
    addPlan: (newPlan: Plan) => number;
}) {
    const [id, setId] = useState<string>("Plan Name");
    const [start, setStart] = useState<number>(2000);

    function saveChanges() {
        if (
            addPlan({
                start: start,
                id: id,
                semesters: []
            }) === 1
        ) {
            setId("Plan Name");
            setStart(2000);
        }
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="planId" as={Row}>
                    <Form.Label column sm={3}>
                        Plan ID
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="planStart" as={Row}>
                    <Form.Label column sm={3}>
                        Start Year
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            value={start}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setStart(parseInt(event.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close!
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
