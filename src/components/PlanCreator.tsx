import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanDropdownMenu } from "./PlanDropdownMenu";
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
        if (!planList.some((plan) => plan.id === newPlan.id)) {
            setPlanList([...planList, newPlan]);
            handleCloseAddModal();
            return 1;
        } else {
            confirmAlert({
                title: "Plan Duplicate Error",
                message: "A plan with that ID already exists!",
                buttons: [
                    {
                        label: "Ok",
                        onClick: () => undefined
                    }
                ]
            });
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
        <div className="PlanMain">
            <h1>Plans</h1>
            <Row className="planAdd">
                <Col className="planAddListDelete">
                    <Form.Label>
                        <div>
                            <Button
                                style={{
                                    backgroundColor: "#FBDB32",
                                    border: "2px solid white",
                                    color: "black",
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
                                    backgroundColor: "#FBDB32"
                                }}
                            >
                                <Col
                                    style={{
                                        color: "black"
                                    }}
                                >
                                    {plan.id}
                                </Col>
                                <Col>
                                    <PlanDropdownMenu
                                        select={() => selectPlan(plan)}
                                        edit={() => {
                                            setPlan(plan);
                                            setShowAddModal2(!showAddModal2);
                                        }}
                                        del={() => deleteSpecificPlan(plan.id)}
                                    />
                                </Col>
                            </li>
                        ))}
                    </div>
                    <br />
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
