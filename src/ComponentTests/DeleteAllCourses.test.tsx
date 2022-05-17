import React from "react";
import { render, screen } from "@testing-library/react";
import { Course } from "../interfaces/projectInterfaces";
import { DeleteAllCourses } from "../deleteAllComponents/DeleteAllCourses";

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

describe("DeleteAllCourses tests", () => {
    beforeEach(() => {
        render(
            <DeleteAllCourses
                courseList={[defaultcourse]}
                setCourseList={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("Delete All Courses button is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Courses/i
        });
        expect(deleteAllPlansButton).toBeInTheDocument();
    });

    test("Deletion Modal (title) is shown", () => {
        const deleteAllPlansButton1 = screen.getByRole("button", {
            name: /Delete All Courses/i
        });
        deleteAllPlansButton1.click();

        const linkElement = screen.getByText(/Course Deletion Confirmation/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Deletion Modal (message) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Courses/i
        });
        deleteAllPlansButton.click();

        const linkElement = screen.getByText(
            /Are you sure you want to delete all courses?/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Deletion Modal (yes button) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Courses/i
        });
        deleteAllPlansButton.click();

        const yesButton = screen.getByRole("button", {
            name: /yes/i
        });
        expect(yesButton).toBeInTheDocument();
    });

    test("Deletion Modal (no button) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Courses/i
        });
        deleteAllPlansButton.click();

        const noButton = screen.getByRole("button", {
            name: /no/i
        });
        expect(noButton).toBeInTheDocument();
    });
});
