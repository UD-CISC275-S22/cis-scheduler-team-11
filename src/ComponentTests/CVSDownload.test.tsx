import React from "react";
import { render, screen } from "@testing-library/react";
import { Plan } from "../interfaces/projectInterfaces";
import { CSVDownload } from "../components/CSVDownload";

const defaultPlan: Plan = {
    start: 2000,
    id: "Plan Name",
    semesters: [
        [
            {
                id: "Fall 2020",
                courses: [
                    {
                        code: "ACCT207",
                        name: "",
                        descr: "",
                        credits: "",
                        preReq: "",
                        restrict: "",
                        breadth: "",
                        typ: "",
                        uid: 0
                    },
                    {
                        code: "CISC275",
                        name: "",
                        descr: "",
                        credits: "",
                        preReq: "",
                        restrict: "",
                        breadth: "",
                        typ: "",
                        uid: 0
                    }
                ]
            },
            {
                id: "Fall 2021",
                courses: [
                    {
                        code: "ACCT208",
                        name: "",
                        descr: "",
                        credits: "",
                        preReq: "",
                        restrict: "",
                        breadth: "",
                        typ: "",
                        uid: 0
                    },
                    {
                        code: "CISC355",
                        name: "",
                        descr: "",
                        credits: "",
                        preReq: "",
                        restrict: "",
                        breadth: "",
                        typ: "",
                        uid: 0
                    }
                ]
            }
        ]
    ]
};
describe("CVSDownload tests", () => {
    beforeEach(() => {
        render(<CSVDownload plan={defaultPlan} />);
    });

    test("Need to make a plan message is shown if no plan is currrently made", () => {
        const linkElement = screen.getByText(
            /You need to make a plan before you can download it/i
        );
        expect(linkElement).toBeInTheDocument();
    });
});
