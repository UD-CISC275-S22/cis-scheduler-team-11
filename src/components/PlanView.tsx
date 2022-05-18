import React, { useState } from "react";
import { Plan } from "../interfaces/projectInterfaces";
import { Button } from "react-bootstrap";
import MultipleSemester from "./MultipleSemester";
import { SemesterCreator } from "./SemesterCreator";
import YearView from "./YearView";

export function PlanView({
    selectedPlan,
    updateSelectedPlan
}: {
    selectedPlan: Plan;
    updateSelectedPlan: (plan: Plan) => void;
}): JSX.Element {
    const yearView = true;
    const [semMenuView, setSemMenuView] = useState<boolean>(false);
    return (
        <div>
            <p>
                {selectedPlan.semesters.length > 0
                    ? ""
                    : "This plan currently has no semesters! Click the button below to add a new semester"}
            </p>
            {semMenuView ? (
                <SemesterCreator
                    updateSelectedPlan={updateSelectedPlan}
                    selectedPlan={selectedPlan}
                    setSemMenuView={setSemMenuView}
                />
            ) : (
                <Button
                    onClick={() => setSemMenuView(true)}
                    style={{
                        backgroundColor: "#FBDB32",
                        border: "2px solid white",
                        color: "black",
                        fontWeight: "bold"
                    }}
                >
                    {" "}
                    Open Semester Menu{" "}
                </Button>
            )}
            <br />
            <br />
            <div className="Calendar">
                <h1>Academic Calendar</h1>
                {yearView ? (
                    <YearView plan={selectedPlan} />
                ) : (
                    <MultipleSemester plan={selectedPlan} />
                )}
            </div>
        </div>
    );
}
