import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import courses from "../data/courses.json";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);

export function ClassPicker(): JSX.Element {
    const [options] = useState<Course[]>(COURSES);
    const [schedule, setSchedule] = useState<string[]>([]);

    function chooseSchedule(course: string) {
        const newCourses = [...schedule, course];
        if (!schedule.includes(course)) {
            setSchedule(newCourses);
        }
    }

    function clearSchedule() {
        setSchedule([]);
    }

    return (
        <div>
            <h3>Add Course</h3>
            <Row>
                <Col>
                    {options.map((course: Course) => (
                        <div key={course.id} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseSchedule(course.id)}
                                size="sm"
                            >
                                {course.id}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Schedule:</strong>
                    {schedule.map((course: string) => (
                        <li key={course}>{course}</li>
                    ))}
                    <Button onClick={clearSchedule}>Clear Schedule</Button>
                </Col>
            </Row>
        </div>
    );
}
