import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
export function PlanEditor({
    show,
    handleClose,
    plan,
    planList,
    setPlanList
}: {
    show: boolean;
    handleClose: () => void;
    plan: Plan;
    planList: Plan[];
    setPlanList: (plan: Plan[]) => void;
}) {
    const [id, setId] = useState<string>("");

    function saveChanges(index: number) {
        const newPlans = planList.map((plan: Plan): Plan => ({ ...plan }));
        newPlans[index] = {
            start: plan.start,
            id: id,
            semesters: plan.semesters
        };
        setPlanList(newPlans);
        handleClose();
    }
    function refresh() {
        setId(plan.id);
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            onShow={refresh}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Plan Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="Edit Id" as={Row} spacing={2}>
                    <Form.Label column sm={2}>
                        Plan Name:
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() =>
                        saveChanges(
                            planList.findIndex(
                                (aPlan: Plan) => aPlan.id === plan.id
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
