import React from "react";
import { render, screen } from "@testing-library/react";
import SingleSemester from "../components/SingleSemester";

describe("SingleSemester tests", () => {
    beforeEach(() => {
        render(<SingleSemester id={""} courses={[]} />);
    });
    test("The inital screen says Total Credits", () => {
        const linkElement = screen.getByText(/Total Credits/i);
        expect(linkElement).toBeInTheDocument();
    });
    test("The credits is 0", () => {
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    });
});
