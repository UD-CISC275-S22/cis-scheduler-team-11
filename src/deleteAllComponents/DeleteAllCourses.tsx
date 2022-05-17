import React from "react";
import { Button } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { Course } from "../interfaces/projectInterfaces";

export function DeleteAllCourses({
    courseList,
    setCourseList
}: {
    courseList: Course[];
    setCourseList: (course: Course[]) => void;
}): JSX.Element {
    function deleteCourses() {
        confirmAlert({
            title: "Course Deletion Confirmation",
            message: "Are you sure you want to delete all courses?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => setCourseList([])
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
            {courseList.length > 0 ? (
                <Button
                    onClick={deleteCourses}
                    style={{
                        backgroundColor: "#E85151",
                        color: "white",
                        fontWeight: "bold",
                        border: "2px solid white"
                    }}
                >
                    Delete All Courses
                </Button>
            ) : (
                <p>This semester has no courses!</p>
            )}
        </div>
    );
}
