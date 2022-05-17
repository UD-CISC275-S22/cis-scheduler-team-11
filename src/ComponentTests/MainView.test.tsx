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

    test("Initially says that you do not have any plans present yet", () => {
        const linkElement = screen.getByText(
            /You currently do not have any plans/i
        );
        expect(linkElement).toBeInTheDocument();
    });
});
