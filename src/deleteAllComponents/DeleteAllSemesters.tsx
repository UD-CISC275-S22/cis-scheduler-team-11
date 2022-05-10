import React from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/projectInterfaces";

export function DeleteAllSemesters({
    semesterList,
    setSemesterList
}: {
    semesterList: Semester[];
    setSemesterList: (semester: Semester[]) => void;
}): JSX.Element {
    function deleteSemesters() {
        setSemesterList([]);
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
                    Delete Semesters
                </Button>
            ) : (
                <p>This plan has no semesters!</p>
            )}
        </div>
    );
}
