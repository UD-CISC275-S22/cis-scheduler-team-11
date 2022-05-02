import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import { PlanAdder } from "./PlanAdder";

export function PlanCreator(): JSX.Element {
    const [planId, setPlanId] = useState<string>("");
    const [planList, setPlanList] = useState<Plan[]>([]);
    const [plan, setPlan] = useState<Plan>(planList[0]);
    const [showAddModal, setShowAddModal] = useState(false);
    // function addPlan(id: string) {
    //     const newPlan = { id: parseInt(id), semesters: [] };
    //     setPlan(newPlan);
    //     const newPlanList = [...planList, newPlan];
    //     const check = planList.filter(({ id }) => id === id);
    //     if (check.length === 0) {
    //         setPlanList(newPlanList);
    //     }
    // }
    function addPlan(newPlan: Plan) {
        if (!planList.some((plan) => plan.id === newPlan.id)) {
            setPlanList([...planList, newPlan]);
        }
    }
    function deletePlans() {
        setPlanList([]);
    }

    function deleteSpecificPlan(id: number) {
        setPlanList(planList.filter((plan) => plan.id != id));
    }
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    return (
        <div>
            <h3>Add Semester</h3>
            <Row className="semesterAdd">
                <Col>
                    <Form.Group
                        controlId="Semester"
                        className="semesterAddForm"
                    >
                        <Button size="sm" onClick={handleShowAddModal}>
                            Add New Plan
                        </Button>
                    </Form.Group>
                </Col>
                <Col className="semesterAddListDelete">
                    <strong>Plans:</strong>
                    <div className="semesterAddList">
                        {planList.map((plan: Plan) => (
                            <li
                                key={plan.id}
                                style={{
                                    display: "flex",
                                    height: "33px",
                                    border: "1px solid black"
                                }}
                            >
                                <Col>{plan.id} </Col>
                                <Col>
                                    <DropdownMenu
                                        horizontal={true}
                                        buttons={[
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                key={1}
                                            >
                                                edit
                                            </Button>,
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                key={2}
                                                onClick={() =>
                                                    deleteSpecificPlan(plan.id)
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
                    <Button onClick={deletePlans}>Delete Plans</Button>
                </Col>
            </Row>
            <div>
                <PlanAdder
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                ></PlanAdder>
            </div>
        </div>
    );
}
