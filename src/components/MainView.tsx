import React, { useState } from "react";
import { Plan, Plans } from "../interfaces/projectInterfaces";
import { PlanCreator } from "../components/PlanCreator";

export function MainView(): JSX.Element {
    const [selectedPlan, selectPlan] = useState<Plan>();
    const [plans, setPlans] = useState<Plans>();
    const a = 0;
    return (
        <div>
            {a == 0 ? (
                <div>
                    {
                        "You currently do not have any plans, click the button below to add one!"
                    }{" "}
                    <PlanCreator
                        selectedPlan={selectedPlan}
                        selectPlan={selectPlan}
                    />
                </div>
            ) : (
                <div>E</div>
            )}
        </div>
    );
}
