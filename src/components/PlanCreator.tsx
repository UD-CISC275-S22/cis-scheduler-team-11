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
    function addPlan(newPlan: Plan) {
        if (!planList.some((plan) => plan.id === newPlan.id)) {
            setPlanList([...planList, newPlan]);
            handleCloseAddModal();
        } else {
            alert("A plan with that ID already exists!");
        }
    }
    function deletePlans() {
        setPlanList([]);
    }

    function deleteSpecificPlan(id: number) {
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
            <h1>Plans</h1>
            <Row className="planAdd">
                <Col className="planAddListDelete">
                    <Form.Label>
                        <Button
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                                fontWeight: "bold"
                            }}
                            size="sm"
                            onClick={handleShowAddModal}
                        >
                            New Plan
                        </Button>
                    </Form.Label>
                    <div className="planAddList">
                        {planList.map((plan: Plan) => (
                            <li
                                className="planList"
                                key={plan.id}
                                style={{
                                    display: "flex",
                                    height: "40px",
                                    width: "200",
                                    border:
                                        selectedPlan == plan
                                            ? "3px solid yellow"
                                            : "2px solid gray",
                                    backgroundColor: "blue"
                                }}
                            >
                                <Col
                                    style={{
                                        color: "white"
                                    }}
                                >
                                    {"Plan"} {plan.id}
                                </Col>
                                <Col>
                                    <DropdownMenu
                                        horizontal={true}
                                        buttons={[
                                            <Button
                                                size="sm"
                                                key={1}
                                                onClick={() => selectPlan(plan)}
                                            >
                                                Select
                                            </Button>,
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                key={2}
                                                onClick={() =>
                                                    deleteSpecificPlan(plan.id)
                                                }
                                            >
                                                ⦻
                                            </Button>
                                        ]}
                                    />
                                </Col>
                            </li>
                        ))}
                    </div>
                    <div>
                        <Button
                            onClick={deletePlans}
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                fontWeight: "bold"
                            }}
                        >
                            Delete Plans
                        </Button>
                    </div>
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
