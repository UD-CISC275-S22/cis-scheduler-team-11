import React from "react";
import { render, screen } from "@testing-library/react";
import { CoursePool } from "../components/CoursePool";

describe("CoursePool tests", () => {
    beforeEach(() => {
        render(<CoursePool />);
    });

    test("Course Pool title is shown", () => {
        const linkElement = screen.getByText(/Course Pool:/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Course Pool message is shown", () => {
        const linkElement = screen.getByText(
            /Add courses that you may want to take to the course pool./i
        );
        expect(linkElement).toBeInTheDocument();
    });
});
