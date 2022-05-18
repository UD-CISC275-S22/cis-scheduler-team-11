import React, { useState } from "react";
//import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanCreator } from "../components/PlanCreator";
import { PlanView } from "../components/PlanView";
import { CSVDownload } from "./CSVDownload";
//import { CourseMove } from "./CoureMove";

export function MainView({
    plans,
    setPlans
}: {
    plans: Plan[];
    setPlans: (plans: Plan[]) => void;
}): JSX.Element {
    const defaultPlan: Plan = {
        start: 2000,
        id: "Plan Name",
        semesters: []
    };
    const [selectedPlan, selectPlan] = useState<Plan>(defaultPlan);
    if (
        plans.length > 0 &&
        (selectedPlan.id == "Plan Name" ||
            !plans.find((plan: Plan) => plan.id === selectedPlan.id))
    ) {
        selectPlan(plans[0]);
    }
    if (plans.length == 0 && selectedPlan.id != "Plan Name") {
        selectPlan(defaultPlan);
    }
    function updateSelectedPlan(editedPlan: Plan) {
        setPlans(
            plans.map((aPlan: Plan) =>
                aPlan.id != selectedPlan.id ? aPlan : editedPlan
            )
        );
        selectPlan(editedPlan);
        ////console.log(selectedPlan);
    }

    return (
        <div>
            <div className="MainView">
                <div id="leftMain">
                    <PlanCreator
                        selectedPlan={selectedPlan}
                        selectPlan={selectPlan}
                        planList={plans}
                        setPlanList={setPlans}
                    />
                    <PlanView
                        updateSelectedPlan={updateSelectedPlan}
                        selectedPlan={selectedPlan}
                    />
                </div>
            </div>
            <br />
            <CSVDownload plan={selectedPlan} />
        </div>
    );
}
