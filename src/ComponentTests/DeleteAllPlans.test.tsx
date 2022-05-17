import React from "react";
import { render, screen } from "@testing-library/react";
import { DeleteAllPlans } from "../deleteAllComponents/DeleteAllPLans";
import { Plan } from "../interfaces/projectInterfaces";

const defaultPlan: Plan = {
    start: 2000,
    id: "Plan Name",
    semesters: []
};

describe("DeleteAllPlans tests", () => {
    beforeEach(() => {
        render(
            <DeleteAllPlans
                planList={[defaultPlan]}
                setPlanList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("Delete All Plans button is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Plans/i
        });
        expect(deleteAllPlansButton).toBeInTheDocument();
    });

    test("Deletion Modal (title) is shown", () => {
        const deleteAllPlansButton1 = screen.getByRole("button", {
            name: /Delete All Plans/i
        });
        deleteAllPlansButton1.click();

        const linkElement = screen.getByText(/Plan Deletion Confirmation/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Deletion Modal (message) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Plans/i
        });
        deleteAllPlansButton.click();

        const linkElement = screen.getByText(
            /Are you sure you want to delete all plans?/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Deletion Modal (yes button) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Plans/i
        });
        deleteAllPlansButton.click();

        const yesButton = screen.getByRole("button", {
            name: /yes/i
        });
        expect(yesButton).toBeInTheDocument();
    });

    test("Deletion Modal (no button) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Plans/i
        });
        deleteAllPlansButton.click();

        const noButton = screen.getByRole("button", {
            name: /no/i
        });
        expect(noButton).toBeInTheDocument();
    });
});
