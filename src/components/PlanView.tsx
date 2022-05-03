import React, { useState } from "react";
import { Plan } from "../interfaces/projectInterfaces";
import { Form } from "react-bootstrap";
import MultipleSemester from "./MultipleSemester";
import YearView from "./YearView";

export function PlanView({
    selectedPlan
}: {
    selectedPlan: Plan;
}): JSX.Element {
    const [yearView, setYearView] = useState<boolean>(true);
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
            {yearView ? (
                <YearView plan={selectedPlan} />
            ) : (
                <MultipleSemester plan={selectedPlan} />
            )}
        </div>
    );
}
