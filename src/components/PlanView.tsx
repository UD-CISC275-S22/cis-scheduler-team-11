import React, { useState } from "react";
import { Plan } from "../interfaces/projectInterfaces";
import { Form, Button } from "react-bootstrap";
import MultipleSemester from "./MultipleSemester";
import { SemesterCreator } from "./SemesterCreator";
import YearView from "./YearView";

export function PlanView({
    selectedPlan,
    plans,
    updateSelectedPlan
}: {
    selectedPlan: Plan;
    plans: Plan[];
    updateSelectedPlan: (plan: Plan) => void;
}): JSX.Element {
    const [yearView, setYearView] = useState<boolean>(true);
    const [semMenuView, setSemMenuView] = useState<boolean>(false);
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-year-view"
                label="Year View"
                checked={yearView}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setYearView(event.target.checked)
                }
                style={{ display: "flex", justifyContent: "center" }}
            />
            <p>
                {selectedPlan.semesters.length > 0
                    ? "This plan currently has " +
                      selectedPlan.semesters.length +
                      " semesters!"
                    : "This plan currently has no semesters! Click the button below to add a new semester"}
            </p>
            {semMenuView ? (
                <SemesterCreator
                    updateSelectedPlan={updateSelectedPlan}
                    selectedPlan={selectedPlan}
                    setSemMenuView={setSemMenuView}
                />
            ) : (
                <Button onClick={() => setSemMenuView(true)}>
                    {" "}
                    Open Semester Menu{" "}
                </Button>
            )}
            <div>
                {yearView ? (
                    <YearView plan={selectedPlan} />
                ) : (
                    <MultipleSemester plan={selectedPlan} />
                )}
            </div>
        </div>
    );
}
