import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { Course } from "../interfaces/projectInterfaces";
import { CourseEditor } from "../components/CourseEditor";
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

const testcourse: Course = {
    code: "ACCT 207",
    name: "Accounting I",
    descr: "",
    credits: "3",
    preReq: "",
    restrict: "Not open to freshmen.",
    breadth: "University: ; A&S: ",
    typ: "Fall, Winter, Spring, Summer",
    uid: 0
};

describe("CourseEditor tests", () => {
    test("Edit course title is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByText(/Edit Course/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit code option is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByText(/Edit Code/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit title label is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/Title/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit credits label is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/Credits/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit prerequisites label is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/Prerequisites/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit restrictions label is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/Restrictions/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit breadth label is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/Breadth/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit type label is shown", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/type/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Edit course label is present", () => {
        render(
            <CourseEditor
                show={true}
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
        const linkElement = screen.getByLabelText(/Course/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("There is a Close Button", () => {
        render(
            <CourseEditor
                show={true}
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
        const closeButton = screen.getByRole("button", {
            name: /Close!/i
        });
        expect(closeButton).toBeInTheDocument();
    });

    test("There is a Save Changes Button", () => {
        render(
            <CourseEditor
                show={true}
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
        const saveChangesButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(saveChangesButton).toBeInTheDocument();
    });

    test("Correct code shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/ACCT/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct code number shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/207/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct title shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/Accounting I/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct credits shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/3/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct restrictions shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/Not open to freshmen./i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct breadth shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(/University: ; A&S:/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Correct type shows up when a course is added", () => {
        render(
            <CourseEditor
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                course={testcourse}
                schedule={[]}
                setSchedule={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
        const linkElement = screen.getByDisplayValue(
            /Fall, Winter, Spring, Summer/i
        );
        expect(linkElement).toBeInTheDocument();
    });
});
