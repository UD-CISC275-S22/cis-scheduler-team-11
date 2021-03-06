import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterCreator } from "../components/SemesterCreator";
import { Plan } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "../components/DropdownMenu";

const defaultPlan: Plan = { id: "0", semesters: [], start: 2000 };

describe("SemesterCreator tests", () => {
    beforeEach(() => {
        render(
            <SemesterCreator
                updateSelectedPlan={function (): void {
                    undefined;
                }}
                selectedPlan={defaultPlan}
                setSemMenuView={function (): void {
                    undefined;
                }}
            />
        );
    });

    test("Add Your Semesters option is shown", () => {
        const linkElement = screen.getByText(/Add Your Semesters/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Your Semesters is shown", () => {
        const linkElement = screen.getByText(/Your Semesters:/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Initially has no semesters shown", () => {
        const linkElement = screen.getByText(/This plan has no semesters!/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Fall Semester option is shown", () => {
        const linkElement = screen.getByText(/fall/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Spring Semester option is shown", () => {
        const linkElement = screen.getByText(/spring/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Summer Semester option is shown", () => {
        const linkElement = screen.getByText(/summer/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Winter Semester option is shown", () => {
        const linkElement = screen.getByText(/winter/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Initial Year is shown", () => {
        const linkElement = screen.getByDisplayValue(/2000/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Add Button", () => {
        const editButton = screen.getByRole("button", {
            name: /add/i
        });
        expect(editButton).toBeInTheDocument();
    });

    test("There is a Dropdown Options Button", () => {
        render(<DropdownMenu buttons={[]} horizontal={false} />);
        const optionsButton = screen.getByRole("button", {
            name: /?????????/i
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
                        click: () => setSemester(),
                        text: "Select"
                    },
                    { click: () => setShowAddModal(), text: "edit" },
                    {
                        variant: "danger",
                        click: () => deleteSpecificCourse(),
                        text: "???"
                    }
                ]}
            />
        );
        const optionsButton = screen.getByRole("button", {
            name: /?????????/i
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
                        click: () => setSemester(),
                        text: "Select"
                    },
                    { click: () => setShowAddModal(), text: "edit" },
                    {
                        variant: "danger",
                        click: () => deleteSpecificCourse(),
                        text: "???"
                    }
                ]}
            />
        );
        const optionsButton = screen.getByRole("button", {
            name: /?????????/i
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
                        click: () => setSemester(),
                        text: "Select"
                    },
                    { click: () => setShowAddModal(), text: "edit" },
                    {
                        variant: "danger",
                        click: () => deleteSpecificCourse(),
                        text: "???"
                    }
                ]}
            />
        );
        const optionsButton = screen.getByRole("button", {
            name: /?????????/i
        });
        optionsButton.click();
        const deleteButton = screen.getByRole("button", {
            name: /???/i
        });
        expect(deleteButton).toBeInTheDocument();
    });

    test("There is a Hide Semester Menu Button", () => {
        const editButton = screen.getByRole("button", {
            name: /hide semester menu/i
        });
        expect(editButton).toBeInTheDocument();
    });
});
function setSemester(): void {
    throw new Error("Function not implemented.");
}

function setShowAddModal(): void {
    throw new Error("Function not implemented.");
}

function deleteSpecificCourse(): void {
    throw new Error("Function not implemented.");
}
