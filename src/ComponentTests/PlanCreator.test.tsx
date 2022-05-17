import React from "react";
import { render, screen } from "@testing-library/react";
import { Plan } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "../components/DropdownMenu";
import { PlanCreator } from "../components/PlanCreator";

const defaultPlan: Plan = { id: "0", semesters: [], start: 2000 };

describe("PlanCreator tests", () => {
    beforeEach(() => {
        render(
            <PlanCreator
                selectedPlan={defaultPlan}
                selectPlan={function (): void {
                    undefined;
                }}
                planList={[]}
                setPlanList={function (): void {
                    undefined;
                }}
            />
        );
    });

    test("Plans title is shown", () => {
        const linkElement = screen.getByText(/Plans/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a New Plan Button", () => {
        const linkElement = screen.getByTestId("new-plan-button");
        expect(linkElement.textContent).toEqual("📁 New Plan");
    });

    test("Plan directions are shown", () => {
        const linkElement = screen.getByText(/To start, Press New Plan!/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Dropdown Options Button", () => {
        render(<DropdownMenu buttons={[]} horizontal={false} />);
        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        expect(optionsButton).toBeInTheDocument();
    });

    test("There is an Select Button", () => {
        render(
            <DropdownMenu
                horizontal={false}
                buttons={[
                    {
                        variant: "primary",
                        text: "Select",
                        click: () => selectPlan()
                    },
                    {
                        text: "Edit",
                        click: () => {
                            setPlan();
                            setShowAddModal();
                        }
                    },
                    {
                        variant: "danger",
                        text: "⦻",
                        click: () => () => deleteSpecificPlan()
                    }
                ]}
            />
        );
        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        optionsButton.click();
        const editButton = screen.getByRole("button", {
            name: /select/i
        });
        expect(editButton).toBeInTheDocument();
    });

    test("There is an Edit Button", () => {
        render(
            <DropdownMenu
                horizontal={false}
                buttons={[
                    {
                        variant: "primary",
                        text: "Select",
                        click: () => selectPlan()
                    },
                    {
                        text: "Edit",
                        click: () => {
                            setPlan();
                            setShowAddModal();
                        }
                    },
                    {
                        variant: "danger",
                        text: "⦻",
                        click: () => () => deleteSpecificPlan()
                    }
                ]}
            />
        );
        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        optionsButton.click();
        const editButton = screen.getByRole("button", {
            name: /edit/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Delete Button", () => {
        render(
            <DropdownMenu
                horizontal={false}
                buttons={[
                    {
                        variant: "primary",
                        text: "Select",
                        click: () => selectPlan()
                    },
                    {
                        text: "Edit",
                        click: () => {
                            setPlan();
                            setShowAddModal();
                        }
                    },
                    {
                        variant: "danger",
                        text: "⦻",
                        click: () => () => deleteSpecificPlan()
                    }
                ]}
            />
        );
        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        optionsButton.click();
        const deleteButton = screen.getByRole("button", {
            name: /⦻/i
        });
        expect(deleteButton).toBeInTheDocument();
    });
});

function selectPlan(): void {
    throw new Error("Function not implemented.");
}

function setPlan() {
    throw new Error("Function not implemented.");
}

function deleteSpecificPlan() {
    throw new Error("Function not implemented.");
}
function setShowAddModal() {
    throw new Error("Function not implemented.");
}
