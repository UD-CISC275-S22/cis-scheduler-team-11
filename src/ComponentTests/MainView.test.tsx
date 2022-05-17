import React from "react";
import { render, screen } from "@testing-library/react";
import { Plan, Plans } from "../interfaces/projectInterfaces";
import { MainView } from "../components/MainView";

const defaultPlan: Plan = {
    start: 2000,
    id: "Plan Name",
    semesters: []
};

describe("MainView tests", () => {
    beforeEach(() => {
        render(
            <MainView
                plans={[]}
                setPlans={function (): void {
                    return;
                }}
            />
        );
    });

    test("Initially says that you do not have any plans present yet", () => {
        const linkElement = screen.getByText(
            /You currently do not have any plans/i
        );
        expect(linkElement).toBeInTheDocument();
    });
});
