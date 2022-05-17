import React from "react";
import { render, screen } from "@testing-library/react";
import { Plan } from "../interfaces/projectInterfaces";
import { PlanEditor } from "../components/PlanEditor";

const defaultplan: Plan = {
    start: 0,
    id: "",
    semesters: []
};

const testplan: Plan = {
    start: 0,
    id: "My First Plan",
    semesters: []
};

describe("PlanEditor tests", () => {
    test("Edit plan title is shown", () => {
        render(
            <PlanEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={defaultplan}
                planList={[]}
                setPlanList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByText(/Edit Plan Name/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit plan name label is shown", () => {
        render(
            <PlanEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={defaultplan}
                planList={[]}
                setPlanList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByLabelText(/Plan Name/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct plan name shows up when a plan is added", () => {
        render(
            <PlanEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={testplan}
                planList={[]}
                setPlanList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/My First Plan/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Close Button", () => {
        render(
            <PlanEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={defaultplan}
                planList={[]}
                setPlanList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const closeButton = screen.getByRole("button", {
            name: /Close!/i
        });
        expect(closeButton).toBeInTheDocument();
    });

    test("There is a Save Changes Button", () => {
        render(
            <PlanEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={defaultplan}
                planList={[]}
                setPlanList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const saveChangesButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(saveChangesButton).toBeInTheDocument();
    });
});
