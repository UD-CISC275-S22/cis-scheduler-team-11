import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import { PlanAdder } from "./PlanAdder";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

export function PlanCreator({
    selectedPlan,
    selectPlan,
    planList,
    setPlanList
}: {
    selectedPlan: Plan | undefined;
    selectPlan: (plan: Plan) => void;
    planList: Plan[];
    setPlanList: (planList: Plan[]) => void;
}): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);
    function addPlan(newPlan: Plan): number {
        if (newPlan.id === "Plan Name") {
            alert("Enter a new name for this plan!");
            return 0;
        } else if (!planList.some((plan) => plan.id === newPlan.id)) {
            setPlanList([...planList, newPlan]);
            handleCloseAddModal();
            return 1;
        } else {
            alert("A plan with that ID already exists!");
            return 0;
        }
    }
    function deletePlans() {
        setPlanList([]);
    }

    function deleteSpecificPlan(id: string) {
        confirmAlert({
            title: "Plan Deletion Confirmation",
            message: "Are you sure you want to delete this plan?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () =>
                        setPlanList(planList.filter((plan) => plan.id != id))
                },
                {
                    label: "No",
                    onClick: () => console.log("deletion cancelled")
                }
            ]
        });
    }
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    return (
        <div>
            <Row className="planAdd">
                <Col>
                    <Form.Group controlId="Plan" className="planAddForm">
                        <Button size="sm" onClick={handleShowAddModal}>
                            Add New Plan
                        </Button>
                    </Form.Group>
                </Col>
                <Col className="planAddListDelete">
                    <strong>Plans:</strong>
                    <div className="planAddList">
                        {planList.map((plan: Plan) => (
                            <li
                                key={plan.id}
                                style={{
                                    display: "flex",
                                    height: "33px",
                                    border: "1px solid black",
                                    backgroundColor:
                                        selectedPlan == plan
                                            ? "lime"
                                            : "lightgray"
                                }}
                            >
                                <Col>{plan.id} </Col>
                                <Col>
                                    <DropdownMenu
                                        horizontal={true}
                                        buttons={[
                                            {
                                                variant: "primary",
                                                text: "Select",
                                                click: () => selectPlan(plan)
                                            },
                                            {
                                                text: "Edit",
                                                click: () =>
                                                    console.log(
                                                        "add functionality to plan edit!!!"
                                                    )
                                            },
                                            {
                                                variant: "danger",
                                                text: "Delete",
                                                click: () => () =>
                                                    deleteSpecificPlan(plan.id)
                                            }
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
