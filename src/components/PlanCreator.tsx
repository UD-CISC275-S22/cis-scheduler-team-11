import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
// import { SemesterCreator } from "./SemesterCreator";
import { Plan } from "../interfaces/projectInterfaces";
// import { DropdownMenu } from "./DropdownMenu";

export function PlanCreator(): JSX.Element {
    const [planId, setPlanId] = useState<string>("0");
    const [planList, setPlanList] = useState<Plan[]>([]);
    function addPlan(id: string) {
        const newPlan = { id: parseInt(id), semesters: [] };
        const newPlanList = [...planList, newPlan];
        const check = planList.filter(({ id }) => id === id);
        if (check.length === 0) {
            setPlanList(newPlanList);
        }
    }
    // function updateId(event: React.ChangeEvent<HTMLSelectElement>) {
    //     setPlanId(event.target.value);
    // }
    function deletePlans() {
        setPlanList([]);
    }

    // function deleteSpecificPlan(id: string) {
    //     setPlanList(planList.filter((plan) => plan.id.toString() != id));
    // }

    return (
        <div>
            <h3>Add Plan</h3>
            <Row className="PlanAdd">
                <Col>
                    <Form.Group controlId="Plan" className="PlanAddForm">
                        <Form.Label>Add Plan</Form.Label>
                        <Form.Control
                            type="number"
                            value={planId}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setPlanId(event.target.value)}
                        />
                        <Button size="sm" onClick={() => addPlan(planId)}>
                            Add
                        </Button>
                    </Form.Group>
                </Col>
                <Col className="PlanAddListDelete">
                    <strong>Plans:</strong>
                    <div className="PlanAddList">
                        {planList.map((plan: Plan) => (
                            <li
                                key={plan.id}
                                style={{
                                    display: "flex",
                                    height: "33px",
                                    border: "1px solid black"
                                }}
                            >
                                <Col>{plan.id}</Col>
                            </li>
                        ))}
                    </div>
                    <Button onClick={() => deletePlans()}>Delete Plans</Button>
                </Col>
            </Row>
        </div>
    );
}
