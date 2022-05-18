import React from "react";
import { render, screen } from "@testing-library/react";
import { MainView } from "../components/MainView";

describe("MainView tests", () => {
    beforeEach(() => {
        render(
            <MainView
                plans={[]}
                setPlans={function (): void {
                    return;
                }}
            />
        );
    });

    test("Says which plan is currently displayed", () => {
        const linkElement = screen.getByText(/Currently displaying plan:/i);
        expect(linkElement).toBeInTheDocument();
    });
});
