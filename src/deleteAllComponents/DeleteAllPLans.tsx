import React from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";

export function DeleteAllPlans({
    planList,
    setPlanList
}: {
    planList: Plan[];
    setPlanList: (plan: Plan[]) => void;
}): JSX.Element {
    function deletePlans() {
        setPlanList([]);
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
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "bold"
                    }}
                >
                    Delete Plans
                </Button>
            ) : (
                <p>To start, Press New Plan!</p>
            )}
        </div>
    );
}
