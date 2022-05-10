import React from "react";
import { render, screen } from "@testing-library/react";
import YearView from "./YearView";
import { Plan } from "../interfaces/projectInterfaces";

const defaultPlan: Plan = { id: 0, semesters: [] };

describe("YearView tests", () => {
    beforeEach(() => {
        render(<YearView plan={defaultPlan} />);
    });
    test("Displays a current plan", () => {
        const linkElement = screen.getByText(/Currently displaying plan:/i);
        expect(linkElement).toBeInTheDocument();
    });
    /* test("Displays a year", () => {
        const linkElement = screen.getByText(/year:/i);
        expect(linkElement).toBeInTheDocument();
    }); */
});
