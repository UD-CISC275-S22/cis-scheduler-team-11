import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import courses from "../data/courses.json";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);

export function ClassPicker(): JSX.Element {
    const [course, setCourse] = useState<string>(COURSES[0].id);
    const [schedule, setSchedule] = useState<string[]>([]);

    function chooseSchedule(course: string) {
        const newCourses = [...schedule, course];
        if (!schedule.includes(course)) {
            setSchedule(newCourses);
        }
    }
    function updateCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value);
    }
    function clearSchedule() {
        setSchedule([]);
    }
    function deleteSpecificCourse(id: string) {
        setSchedule(schedule.filter((string) => string != id));
        console.log("deleteSpecificCourse");
    }

    return (
        <div>
            <h3>Add Course</h3>
            <Row className="Courses">
                <Col>
                    <Form.Group>
                        <Form.Label>Select Course</Form.Label>
                        <Form.Select onChange={updateCourse}>
                            {COURSES.map((course: Course) => (
                                <option
                                    key={course.id + course.credits}
                                    value={course.id}
                                >
                                    {course.id}
                                </option>
                            ))}
                        </Form.Select>
                        <Button onClick={() => chooseSchedule(course)}>
                            Add Course
                        </Button>
                        <Form.Control value={""}></Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <strong>Courses:</strong>
                    {schedule.map((course: string) => (
                        <li
                            key={course}
                            style={{
                                display: "flex",
                                height: "33px",
                                border: "1px solid black"
                            }}
                        >
                            <Col>{course} </Col>
                            <Col>
                                <DropdownMenu
                                    horizontal={true}
                                    buttons={[
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            key={1}
                                        >
                                            edit
                                        </Button>,
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            key={2}
                                            onClick={() =>
                                                deleteSpecificCourse(course)
                                            }
                                        >
                                            delete
                                        </Button>
                                    ]}
                                />
                            </Col>
                        </li>
                    ))}
                    <Button onClick={clearSchedule}>Clear Courses</Button>
                </Col>
            </Row>
        </div>
    );
}
