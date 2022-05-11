import React from "react";
import { Button } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { Semester } from "../interfaces/projectInterfaces";

export function DeleteAllSemesters({
    semesterList,
    setSemesterList
}: {
    semesterList: Semester[];
    setSemesterList: (semester: Semester[]) => void;
}): JSX.Element {
    function deleteSemesters() {
        confirmAlert({
            title: "Semester Deletion Confirmation",
            message: "Are you sure you want to delete all semesters?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => setSemesterList([])
                },
                {
                    label: "No",
                    onClick: () => console.log("deletion cancelled")
                }
            ]
        });
    }
    return (
        <div
            style={{
                color: "white",
                fontWeight: "bold"
            }}
        >
            {semesterList.length > 0 ? (
                <Button
                    onClick={deleteSemesters}
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "bold"
                    }}
                >
                    Delete All Semesters
                </Button>
            ) : (
                <p>This plan has no semesters!</p>
            )}
        </div>
    );
}
