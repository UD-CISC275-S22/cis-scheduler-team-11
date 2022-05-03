import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanAdder } from "./PlanAdder";
import { PlanList } from "./PlanList";

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
            <PlanList
                plans={Plans}
                deletePlan={deletePlan}
                setPlan={setPlan}
            ></PlanList>
        </div>
    );
}
