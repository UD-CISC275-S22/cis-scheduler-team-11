import React from "react";
import { render, screen } from "@testing-library/react";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanView } from "../components/PlanView";

const defaultPlan: Plan = {
    start: 2000,
    id: "Plan Name",
    semesters: []
};

describe("PlanView tests", () => {
    beforeEach(() => {
        render(
            <PlanView
                selectedPlan={defaultPlan}
                updateSelectedPlan={function (): void {
                    return;
                }}
            />
        );
    });

    test("Initially says your plan does not have any semesters yet", () => {
        const linkElement = screen.getByText(
            /This plan currently has no semesters!/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Academic Calendar title is shown", () => {
        const linkElement = screen.getByText(/Academic Calendar/i);
        expect(linkElement).toBeInTheDocument();
    });
});
