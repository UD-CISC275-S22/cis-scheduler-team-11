import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CISC275/i);
    expect(linkElement).toBeInTheDocument();
});

test("Welcome message is shown", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to your schedule/i);
    expect(linkElement).toBeInTheDocument();
});

test("Directions are shown", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Below you will see your degree plans/i
    );
    expect(linkElement).toBeInTheDocument();
});

test("Name form is shown", () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/insert your name/i);
    expect(linkElement).toBeInTheDocument();
});

test("Initial no plans is shown", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /You currently do not have any plans/i
    );
    expect(linkElement).toBeInTheDocument();
});
