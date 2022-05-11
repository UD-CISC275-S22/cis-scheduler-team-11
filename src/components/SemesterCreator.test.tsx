import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterCreator } from "./SemesterCreator";
import { Plan } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import { Button } from "react-bootstrap";

const defaultPlan: Plan = { id: 0, semesters: [] };

describe("SingleSemester tests", () => {
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
    /* //need to make this more specific since there are a lot of add semesters
    test("Add Semester option is shown", () => {
        const linkElement = screen.getByText(/add semester/i);
        expect(linkElement).toBeInTheDocument();
    }); */
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
    test("There is a Add Button", () => {
        const editButton = screen.getByRole("button", {
            name: /add/i
        });
        expect(editButton).toBeInTheDocument();
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
                buttons={[
                    <Button
                        size="sm"
                        key={3}
                        onClick={
                            () => setSemester() // did this just to get rid of the warning lol
                        }
                    >
                        Select
                    </Button>,
                    <Button
                        variant="secondary"
                        size="sm"
                        key={1}
                        onClick={() => setShowAddModal()}
                    >
                        edit
                    </Button>,
                    <Button
                        variant="danger"
                        size="sm"
                        key={2}
                        onClick={() => deleteSpecificCourse()}
                    >
                        ⦻
                    </Button>
                ]}
                horizontal={false}
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
                buttons={[
                    <Button
                        size="sm"
                        key={3}
                        onClick={
                            () => setSemester() // did this just to get rid of the warning lol
                        }
                    >
                        Select
                    </Button>,
                    <Button
                        variant="secondary"
                        size="sm"
                        key={1}
                        onClick={() => setShowAddModal()}
                    >
                        edit
                    </Button>,
                    <Button
                        variant="danger"
                        size="sm"
                        key={2}
                        onClick={() => deleteSpecificCourse()}
                    >
                        ⦻
                    </Button>
                ]}
                horizontal={false}
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
                buttons={[
                    <Button
                        size="sm"
                        key={3}
                        onClick={
                            () => setSemester() // did this just to get rid of the warning lol
                        }
                    >
                        Select
                    </Button>,
                    <Button
                        variant="secondary"
                        size="sm"
                        key={1}
                        onClick={() => setShowAddModal()}
                    >
                        edit
                    </Button>,
                    <Button
                        variant="danger"
                        size="sm"
                        key={2}
                        onClick={() => deleteSpecificCourse()}
                    >
                        ⦻
                    </Button>
                ]}
                horizontal={false}
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

    /* test("There is a Delete Semester Button", () => {
        const editButton = screen.getByRole("button", {
            name: /delete semesters/i
        });
        expect(editButton).toBeInTheDocument();
    }); */
    test("There is a Hide Semester Menu Button", () => {
        const editButton = screen.getByRole("button", {
            name: /hide semester menu/i
        });
        expect(editButton).toBeInTheDocument();
    });

    /* test("There is a add course menu Button", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /add/i
        });
        addCourseButton.click();
        const linkElement = screen.getByText(/▼ Add Course Menu ▼/i);
        expect(linkElement).toBeInTheDocument();
    }); */

    test("There is a hide semester  Menu Button", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /add/i
        });
        addCourseButton.click();
        const editButton = screen.getByRole("button", {
            name: /Hide Semester Menu/i
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
