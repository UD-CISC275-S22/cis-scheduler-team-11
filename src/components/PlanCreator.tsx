import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import { PlanAdder } from "./PlanAdder";
import { PlanEditor } from "./PlanEditor";
import { DeleteAllPlans } from "../deleteAllComponents/DeleteAllPLans";
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
    const [plan, setPlan] = useState<Plan>(planList[0]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAddModal2, setShowAddModal2] = useState(false);
    const handleCloseAddModal2 = () => setShowAddModal2(false);
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
            <h1>Plans</h1>
            <Row className="planAdd">
                <Col className="planAddListDelete">
                    <Form.Label>
                        <div>
                            <Button
                                style={{
                                    backgroundColor: "#f0a369",
                                    color: "white",
                                    fontWeight: "bold"
                                }}
                                onClick={handleShowAddModal}
                            >
                                <span data-testid="new-plan-button">
                                    📁 New Plan
                                </span>
                            </Button>
                        </div>
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
                                            ? "3px solid white"
                                            : "2px solid gray",
                                    backgroundColor: "#F0A369"
                                }}
                            >
                                <Col
                                    style={{
                                        color: "white"
                                    }}
                                >
                                    {plan.id}
                                </Col>
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
                                                click: () => {
                                                    setPlan(plan);
                                                    setShowAddModal2(
                                                        !showAddModal2
                                                    );
                                                }
                                            },
                                            {
                                                variant: "danger",
                                                text: "⦻",
                                                click: () => () =>
                                                    deleteSpecificPlan(plan.id)
                                            }
                                        ]}
                                    />
                                </Col>
                            </li>
                        ))}
                    </div>
                    {/* If there are no plans currently, we do not need a delete all button */}
                    <DeleteAllPlans
                        planList={planList}
                        setPlanList={setPlanList}
                    />
                </Col>
            </Row>
            <div>
                <PlanAdder
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                ></PlanAdder>
            </div>
            <div>
                <PlanEditor
                    show={showAddModal2}
                    handleClose={handleCloseAddModal2}
                    plan={plan}
                    planList={planList}
                    setPlanList={setPlanList}
                ></PlanEditor>
            </div>
        </div>
    );
}
