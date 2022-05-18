import React from "react";
import { PlanButtonProps } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";

export function PlanDropdownMenu({
    select,
    edit,
    del
}: PlanButtonProps): JSX.Element {
    return (
        <DropdownMenu
            horizontal={true}
            buttons={[
                {
                    variant: "primary",
                    text: "Select",
                    click: select
                },
                {
                    text: "Edit",
                    click: edit
                },
                {
                    variant: "danger",
                    text: "⦻",
                    click: del
                }
            ]}
        />
    );
}
