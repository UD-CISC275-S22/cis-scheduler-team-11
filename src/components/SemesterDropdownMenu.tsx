import React from "react";
import { SemesterButtonProps } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";

export function SemesterDropdownMenu({
    horizontal,
    select,
    edit,
    del
}: SemesterButtonProps): JSX.Element {
    return (
        <DropdownMenu
            horizontal={horizontal != undefined ? horizontal : true}
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
