import React from "react";
import { Button } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { Plan } from "../interfaces/projectInterfaces";

export function DeleteAllPlans({
    planList,
    setPlanList
}: {
    planList: Plan[];
    setPlanList: (plan: Plan[]) => void;
}): JSX.Element {
    function deletePlans() {
        confirmAlert({
            title: "Plan Deletion Confirmation",
            message: "Are you sure you want to delete all plans?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => setPlanList([])
                },
                {
                    label: "No",
                    onClick: () => console.log("deletion cancelled")
                }
            ]
        });
    }
    return (
        <div
            style={{
                color: "black",
                fontWeight: "bold"
            }}
        >
            {planList.length > 0 ? (
                <Button
                    onClick={deletePlans}
                    style={{
                        backgroundColor: "#E85151",
                        color: "white",
                        fontWeight: "bold",
                        border: "2px solid white"
                    }}
                >
                    Delete All Plans
                </Button>
            ) : (
                <p
                    style={{
                        color: "white",
                        fontWeight: "bold"
                    }}
                >
                    To start, Press New Plan!
                </p>
            )}
        </div>
    );
}
