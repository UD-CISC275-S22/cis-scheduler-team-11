import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanCreator } from "../components/PlanCreator";
import { PlanView } from "../components/PlanView";

export function MainView(): JSX.Element {
    const defaultPlan = {
        id: -1,
        semesters: []
    };
    const [selectedPlan, selectPlan] = useState<Plan>({
        id: -1,
        semesters: []
    });
    const [plans, setPlans] = useState<Plan[]>([]);
    if (plans.length > 0 && selectedPlan.id == -1) {
        selectPlan(plans[0]);
    }
    if (plans.length == 0 && selectedPlan.id != -1) {
        selectPlan(defaultPlan);
    }
    function updateSelectedPlan(editedPlan: Plan) {
        setPlans(
            plans.map((aPlan: Plan) =>
                aPlan.id != selectedPlan.id ? aPlan : editedPlan
            )
        );
        selectPlan(editedPlan);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    updateSelectedPlan({
                        ...selectedPlan,
                        id: selectedPlan.id + 1
                    });
                }}
            >
                click
            </Button>
            {plans.length == 0 ? (
                <div>
                    {
                        "You currently do not have any plans, click the button below to add one!"
                    }
                    <PlanCreator
                        selectedPlan={selectedPlan}
                        selectPlan={selectPlan}
                        planList={plans}
                        setPlanList={setPlans}
                    />
                </div>
            ) : (
                <div>
                    <PlanCreator
                        selectedPlan={selectedPlan}
                        selectPlan={selectPlan}
                        planList={plans}
                        setPlanList={setPlans}
                    />
                    <PlanView
                        plans={plans}
                        setPlans={setPlans}
                        selectedPlan={selectedPlan}
                    />
                </div>
            )}
        </div>
    );
}
