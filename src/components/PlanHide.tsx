import React, { useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanAdder } from "./PlanAdder";
import { DropdownMenu } from "./DropdownMenu";
//import { PlanList } from "./PlanList";

export function PlanHide({
    Plans,
    setPlan
}: {
    Plans: Plan[];
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);

    function addPlan(newPlan: Plan) {
        if (!Plans.some((plan) => plan.id === newPlan.id)) {
            setPlan([...Plans, newPlan]);
        }
    }

    function deletePlan(id: number) {
        setPlan(Plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button
                className="btn effect01"
                target="_blank"
                onClick={handleShowAddModal}
            >
                <span>New Plan</span>
            </Button>

            <PlanAdder
                show={showAddModal}
                handleClose={handleCloseAddModal}
                addPlan={addPlan}
            ></PlanAdder>
            {Plans.map((plan: Plan) => (
                <div key={plan.id} className="planlist">
                    <Container>
                        <Row>
                            <Col>
                                <h3>{plan.id}</h3>
                                <DropdownMenu
                                    horizontal={true}
                                    buttons={[
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            key={1}
                                        >
                                            edit
                                        </Button>
                                    ]}
                                />
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
                </div>
            ))}
        </div>
    );
}
