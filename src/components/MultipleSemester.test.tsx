import React from "react";
import { render, screen } from "@testing-library/react";
import MultipleSemester from "./MultipleSemester";
import { Plan } from "../interfaces/projectInterfaces";

const defaultPlan: Plan = { id: 1, semesters: [] };
describe("SingleSemester tests", () => {
    beforeEach(() => {
        render(<MultipleSemester plan={defaultPlan} />);
    });
    test("Current plan is shown", () => {
        const linkElement = screen.getByText(/Currently displaying plan/i);
        expect(linkElement).toBeInTheDocument();
    });
});
