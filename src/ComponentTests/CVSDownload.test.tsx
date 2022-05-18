import React from "react";
import { render, screen } from "@testing-library/react";
import { Plan } from "../interfaces/projectInterfaces";
import { CSVDownload } from "../components/CSVDownload";

const defaultPlan1: Plan = {
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

const defaultPlan2: Plan = {
    start: 2000,
    id: "My First Plan",
    semesters: []
};

const defaultPlan3: Plan = {
    start: 2000,
    id: "My First Plan",
    semesters: [
        [
            {
                id: "Fall 2020",
                courses: []
            }
        ]
    ]
};

const defaultPlan4: Plan = {
    start: 2000,
    id: "My First Plan",
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
    test("Plan's named 'Plan Name' can not be downloaded", () => {
        render(<CSVDownload plan={defaultPlan1} />);
        const linkElement = screen.getByText(
            /You need to make a plan before you can download it/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Need to add a semester message is shown if no semester is currrently made", () => {
        render(<CSVDownload plan={defaultPlan2} />);
        const linkElement = screen.getByText(
            /You do not have enough semesters to download your plan/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Need to add a course message is shown if no course is currrently made", () => {
        render(<CSVDownload plan={defaultPlan3} />);
        const linkElement = screen.getByText(
            /You do not have enough courses to download your plan/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Download Your Plan button is shown if conditions are met", () => {
        render(<CSVDownload plan={defaultPlan4} />);
        const downloadButton = screen.getByRole("button", {
            name: /Download your Plan!/i
        });
        expect(downloadButton).toBeInTheDocument();
    });
});
