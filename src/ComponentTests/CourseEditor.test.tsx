import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { Course, Semester } from "../interfaces/projectInterfaces";
import { CourseEditor } from "../components/CourseEditor";
import { ClassPicker } from "../components/ClassPicker";
import { DropdownMenu } from "../components/DropdownMenu";
//not sure how to test this

const defaultcourse: Course = {
    code: "",
    name: "",
    descr: "",
    credits: "",
    preReq: "",
    restrict: "",
    breadth: "",
    typ: "",
    uid: 0
};

describe("CourseEditor tests", () => {
    beforeEach(() => {
        render(
            <CourseEditor
                show={false}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={defaultcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });

    test("Edit course title is shown", () => {
        const defaultSem: Semester = { id: "X 0", courses: [] };
        const [selectedCourse, selectCourse] = useState<Course>(defaultcourse);
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
        render(
            <DropdownMenu
                buttons={[
                    {
                        variant: "primary",
                        text: "Select",
                        click: () => selectCourse(selectedCourse)
                    },
                    {
                        text: "Edit",
                        click: () => {
                            selectCourse(defaultcourse);
                            setShowAddModal();
                        }
                    },
                    {
                        variant: "danger",
                        text: "⦻",
                        click: () => deleteSpecificCourse()
                    }
                ]}
                horizontal={false}
            />
        );

        const addCourseButton = screen.getByRole("button", {
            name: /add course/i
        });
        addCourseButton.click();

        const optionsButton = screen.getByRole("button", {
            name: /●●●/i
        });
        optionsButton.click();

        const editButton = screen.getByRole("button", {
            name: /edit/i
        });
        editButton.click();

        //const linkElement = screen.getByText(/Edit Course/i);
        expect(editButton).toBeInTheDocument();
    });
});

function setShowAddModal() {
    throw new Error("Function not implemented.");
}

function deleteSpecificCourse(): void {
    throw new Error("Function not implemented.");
}
