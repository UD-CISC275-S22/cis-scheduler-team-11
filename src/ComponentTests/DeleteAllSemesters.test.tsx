import React from "react";
import { render, screen } from "@testing-library/react";
import { Semester } from "../interfaces/projectInterfaces";
import { DeleteAllSemesters } from "../deleteAllComponents/DeleteAllSemesters";

const defaultsemester: Semester = {
    id: "",
    courses: []
};

describe("DeleteAllSemesters tests", () => {
    beforeEach(() => {
        render(
            <DeleteAllSemesters
                semesterList={[defaultsemester]}
                setSemesterList={function (semester: Semester[]): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("Delete All Semesters button is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Semesters/i
        });
        expect(deleteAllPlansButton).toBeInTheDocument();
    });

    test("Deletion Modal (title) is shown", () => {
        const deleteAllPlansButton1 = screen.getByRole("button", {
            name: /Delete All Semesters/i
        });
        deleteAllPlansButton1.click();

        const linkElement = screen.getByText(/Semester Deletion Confirmation/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Deletion Modal (message) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Semesters/i
        });
        deleteAllPlansButton.click();

        const linkElement = screen.getByText(
            /Are you sure you want to delete all semesters?/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Deletion Modal (yes button) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Semesters/i
        });
        deleteAllPlansButton.click();

        const yesButton = screen.getByRole("button", {
            name: /yes/i
        });
        expect(yesButton).toBeInTheDocument();
    });

    test("Deletion Modal (no button) is shown", () => {
        const deleteAllPlansButton = screen.getByRole("button", {
            name: /Delete All Semesters/i
        });
        deleteAllPlansButton.click();

        const noButton = screen.getByRole("button", {
            name: /no/i
        });
        expect(noButton).toBeInTheDocument();
    });
});
