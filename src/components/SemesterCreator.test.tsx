// import React from "react";
import { screen } from "@testing-library/react";
// import { SemesterCreator } from "./SemesterCreator";
// import { Plan } from "../interfaces/projectInterfaces";

describe("SingleSemester tests", () => {
    // beforeEach(() => {
    //     render(
    //         <SemesterCreator
    //             updateSelectedPlan={function (plan: Plan): void {
    //                 throw new Error("Function not implemented.");
    //             }}
    //             selectedPlan={undefined}
    //             setSemMenuView={function (semMenuView: boolean): void {
    //                 throw new Error("Function not implemented.");
    //             }}
    //         />
    //     );
    // });
    test("Add Semester option is shown", () => {
        const linkElement = screen.getByText(/add semester/i);
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
    test("There is a Add Button", () => {
        const editButton = screen.getByRole("button", {
            name: /add/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Select Button", () => {
        const editButton = screen.getByRole("button", {
            name: /select/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Edit Button", () => {
        const editButton = screen.getByRole("button", {
            name: /edit/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Delete Button", () => {
        const editButton = screen.getByRole("button", {
            name: /delete/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Delete Semester Button", () => {
        const editButton = screen.getByRole("button", {
            name: /delete semester/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Hide Semester Menu Button", () => {
        const editButton = screen.getByRole("button", {
            name: /hide semester menu/i
        });
        expect(editButton).toBeInTheDocument();
    });
    test("There is a Show Course Menu Button", () => {
        const editButton = screen.getByRole("button", {
            name: /show course menu/i
        });
        expect(editButton).toBeInTheDocument();
    });
});
