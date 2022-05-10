import React from "react";
import { render, screen } from "@testing-library/react";
import { ClassPicker } from "./ClassPicker";
import { Semester } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import { Button } from "react-bootstrap";

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
    test("Adds CISC106 course to the list", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /add course/i
        });
        addCourseButton.click();
        expect(screen.getByDisplayValue("CISC106")).toBeInTheDocument();
    });

    test("There is an 'Add Course' button present", () => {
        const addCourseButton = screen.getByRole("button", {
            name: /Add Course/i
        });
        expect(addCourseButton).toBeInTheDocument();
    });
    test("There is a Dropdown Options Button", () => {
        render(<DropdownMenu buttons={[]} horizontal={false} />);
        const editButton = screen.getByRole("button", {
            name: /●●●/i
        });
        expect(editButton).toBeInTheDocument();
    });

    test("There is an Edit Button", () => {
        render(
            <DropdownMenu
                buttons={[
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
        /* const addCourseButton = screen.getByRole("button", {
            name: /add course/i
        });
        addCourseButton.click();
        // const editButton = screen.getByRole("button", { name: /●●●/i });
        // editButton.click();
        expect(screen.getByDisplayValue(/●●●/i)).toBeInTheDocument(); */
        const editButton = screen.getByRole("button", {
            name: /●●●/i
        });
        editButton.click();
        const linkElement = screen.getByText(/edit/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is an Clear Courses Button", () => {
        const editButton = screen.getByRole("button", {
            name: /clear courses/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Delete Button", () => {
        render(
            <DropdownMenu
                buttons={[
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
        const editButton = screen.getByRole("button", {
            name: /●●●/i
        });
        editButton.click();
        const editButton2 = screen.getByRole("button", {
            name: /⦻/i
        });
        expect(editButton2).toBeInTheDocument();
    });

    test("There is an Clear Courses Button", () => {
        const editButton = screen.getByRole("button", {
            name: /clear courses/i
        });
        expect(editButton).toBeInTheDocument();
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
