import React from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/projectInterfaces";

export function DeleteAllCourses({
    courseList,
    setCourseList
}: {
    courseList: Course[];
    setCourseList: (course: Course[]) => void;
}): JSX.Element {
    function deleteCourses() {
        setCourseList([]);
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
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "bold"
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
