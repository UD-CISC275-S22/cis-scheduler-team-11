import React from "react";
//import { Plan, Plans } from "../interfaces/projectInterfaces";
import { PlanCreator } from "../components/PlanCreator";

export function MainView(): JSX.Element {
    const a = 0;
    return (
        <div>
            {a == 0 ? (
                <div>
                    {
                        "You currently do not have any plans, click the button below to add one!"
                    }{" "}
                    <PlanCreator />
                </div>
            ) : (
                <div>E</div>
            )}
        </div>
    );
}
