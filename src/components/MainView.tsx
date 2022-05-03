import React, { useState } from "react";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanCreator } from "../components/PlanCreator";
import { PlanView } from "../components/PlanView";

export function MainView(): JSX.Element {
    const [selectedPlan, selectPlan] = useState<Plan>({ id: 1, semesters: [] });
    const [plans, setPlans] = useState<Plan[]>([]);
    return (
        <div>
            {plans.length == 0 ? (
                <div>
                    {
                        "You currently do not have any plans, click the button below to add one!"
                    }
                </div>
            ) : (
                <div>
                    <PlanView selectedPlan={selectedPlan} />
                </div>
            )}
            <PlanCreator
                selectedPlan={selectedPlan}
                selectPlan={selectPlan}
                planList={plans}
                setPlanList={setPlans}
            />
        </div>
    );
}
