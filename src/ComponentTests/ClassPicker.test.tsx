import React from "react";
import { render, screen } from "@testing-library/react";
import { ClassPicker } from "../components/ClassPicker";
import { Semester } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "../components/DropdownMenu";

const defaultSem: Semester = { id: "X 0", courses: [] };

describe("ClassPicker tests", () => {
    beforeEach(() => {
        render(
            <ClassPicker
                setCourseMenuView={function (): void {
                    undefined;
                }}
                selectedSemester={defaultSem}
                updateSelectedSemester={function (): void {
                    undefined;
                }}
            />
        );
    });
    test("Adds ACCT 166 course to the list", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /add course/i
        });
        addCourseButton.click();
        expect(screen.getByDisplayValue("ACCT 166")).toBeInTheDocument();
    });

    test("There is an 'Add Course' button present", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /Add Course/i
        });
        expect(addCourseButton).toBeInTheDocument();
    });

    test("There is an 'Hide Course Menu' button present", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /Hide Course Menu/i
        });
        expect(addCourseButton).toBeInTheDocument();
    });

    test("There is a Dropdown Options Button", () => {
        render(<DropdownMenu buttons={[]} horizontal={false} />);
        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        expect(optionsButton).toBeInTheDocument();
    });

    test("There is an Edit Button", () => {
        render(
            <DropdownMenu
                horizontal={false}
                buttons={[
                    { click: () => setShowAddModal(), text: "edit" },
                    {
                        variant: "danger",
                        click: () => deleteSpecificCourse(),
                        text: "⦻"
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

    test("There is a Select Button", () => {
        render(
            <DropdownMenu
                horizontal={false}
                buttons={[
                    {
                        variant: "primary",
                        text: "Select",
                        click: () => selectCourse()
                    },
                    {
                        text: "Edit",
                        click: () => {
                            selectCourse();
                            setShowAddModal();
                        }
                    },
                    {
                        variant: "danger",
                        text: "⦻",
                        click: () => deleteSpecificCourse()
                    }
                ]}
            />
        );

        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        optionsButton.click();

        const selectButton = screen.getByRole("button", {
            name: /select/i
        });
        expect(selectButton).toBeInTheDocument();
    });

    test("The screen initially says semester has no courses", () => {
        const linkElement = screen.getByText(/This semester has no courses!/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Selected Semester View", () => {
        const linkElement = screen.getByLabelText(/Selected Semester View/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Delete Button", () => {
        render(
            <DropdownMenu
                horizontal={false}
                buttons={[
                    { click: () => setShowAddModal(), text: "edit" },
                    {
                        variant: "danger",
                        click: () => deleteSpecificCourse(),
                        text: "⦻"
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

    test("Add Courses Title is Present", () => {
        const linkElement = screen.getByText(/Add Course/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Select Course is Present", () => {
        const linkElement = screen.getByText(/Select Course/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Course list area is Present", () => {
        const linkElement = screen.getByText(/Courses:/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Course form label is present", () => {
        const linkElement = screen.getByLabelText(/course/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Selected semester option is present", () => {
        const linkElement = screen.getByLabelText(/selected semester/i);
        expect(linkElement).toBeInTheDocument();
    });
});
function setShowAddModal(): void {
    throw new Error("Function not implemented.");
}
function deleteSpecificCourse(): void {
    throw new Error("Function not implemented.");
}
function selectCourse(): void {
    throw new Error("Function not implemented.");
}
