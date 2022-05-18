import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("Shows the UD mascot logo", () => {
        const logo = screen.getByRole("img");
        expect(logo).toHaveAttribute(
            "src",
            "https://cdn.shopify.com/s/files/1/1209/2544/products/New-Delaware-Blue-Hens_435x485.jpg?v=1542469747"
        );
    });

    test("renders the course name somewhere", () => {
        const linkElement = screen.getByText(/UD CISC275/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Welcome message is shown", () => {
        const linkElement = screen.getByText(/Welcome to your schedule/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Directions are shown", () => {
        const linkElement = screen.getByText(
            /Below you will be able to create and save your degree plans/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Name form is shown", () => {
        const linkElement = screen.getByPlaceholderText(/insert your name/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Save or download your plan message is shown", () => {
        const linkElement = screen.getByText(
            /You can save your progress or download/i
        );
        expect(linkElement).toBeInTheDocument();
    });

    test("Up to date message is shown", () => {
        const linkElement = screen.getByText(/Up to date with last save/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Can't download CSV until plan is added message", () => {
        const linkElement = screen.getByText(
            /You need to make a plan before you can download it/i
        );
        expect(linkElement).toBeInTheDocument();
    });
});
