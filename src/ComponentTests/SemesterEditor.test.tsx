import React from "react";
import { render, screen } from "@testing-library/react";
import { Semester } from "../interfaces/projectInterfaces";
import { SemesterEditor } from "../components/SemesterEditor";

const defaultsemester: Semester = {
    id: "",
    courses: []
};

const testsemester: Semester = {
    id: "Fall 2020",
    courses: [
        {
            code: "ACCT 207",
            name: "Accounting I",
            descr: "",
            credits: "3",
            preReq: "",
            restrict: "Not open to freshmen.",
            breadth: "University: ; A&S: ",
            typ: "Fall, Winter, Spring, Summer",
            uid: 0
        }
    ]
};

describe("SemesterEditor tests", () => {
    test("Edit semester title is shown", () => {
        render(
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={defaultsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByText(/Edit Semester/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit semester title is shown", () => {
        render(
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={defaultsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByText(/Edit semester/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Add semester label is shown", () => {
        render(
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={defaultsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByLabelText(/Add Semester/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Semester year label is shown", () => {
        render(
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={defaultsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByLabelText(/Semester Year/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct plan name shows up when a plan is added", () => {
        render(
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={testsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/Fall/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Close Button", () => {
        render(
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={defaultsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
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
            <SemesterEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={defaultsemester}
                semesters={[]}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                selectSemester={function (): void {
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
