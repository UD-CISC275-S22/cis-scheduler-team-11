import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanAdder } from "../components/PlanAdder";

describe("PlanAdder tests", () => {
    beforeEach(() => {
        render(
            <PlanAdder
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                addPlan={function (): number {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("Add a new plan title is shown", () => {
        const linkElement = screen.getByText(/Add new plan/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Add Plan ID is shown", () => {
        const linkElement = screen.getByLabelText(/Plan ID/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Start year label is shown", () => {
        const linkElement = screen.getByLabelText(/Start year/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Close Button", () => {
        const closeButton = screen.getByRole("button", {
            name: /Close!/i
        });
        expect(closeButton).toBeInTheDocument();
    });

    test("There is a Save Changes Button", () => {
        const saveChangesButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(saveChangesButton).toBeInTheDocument();
    });
});
