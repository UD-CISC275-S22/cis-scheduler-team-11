import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import { CourseEditor } from "./CourseEditor";
import TextField from "@mui/material/TextField";
import { Course } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import courses from "../data/courses.json";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);

export function ClassPicker(): JSX.Element {
    const [course, setCourse] = useState<Course>(COURSES[0]);
    const [schedule, setSchedule] = useState<Course[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);

    function chooseSchedule() {
        const newSchedule = { ...course };
        const newScheduleList = [...schedule, newSchedule];
        const check = schedule.filter(({ id }) => id === course.id);
        if (check.length === 0) {
            setSchedule(newScheduleList);
        }
    }
    function clearSchedule() {
        setSchedule([]);
    }
    function deleteSpecificCourse(course: Course) {
        setSchedule(schedule.filter(({ id }) => id !== course.id));
        console.log("deleteSpecificCourse");
    }

    return (
        <div>
            <h3>Add Course</h3>
            <Row className="Courses">
                <Col>
                    <Form.Group>
                        <Form.Label>Select Course</Form.Label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            inputValue={course.id}
                            onChange={(e, v) =>
                                setCourse({
                                    ...course,
                                    id: v === null ? " " : v.toUpperCase()
                                })
                            }
                            value={course.id}
                            options={COURSES.map(
                                (course: Course): string => course.id
                            )}
                            //map the options
                            sx={{ width: 300, background: "white" }}
                            renderInput={(params) => (
                                <TextField
                                    value={course.id}
                                    {...params}
                                    label="Course"
                                    onChange={({ target }) =>
                                        setCourse({
                                            ...course,
                                            id: target.value.toUpperCase()
                                        })
                                    }
                                />
                            )}
                        />
                        <Button onClick={() => chooseSchedule()}>
                            Add Course
                        </Button>
                    </Form.Group>
                </Col>
                <Col>
                    <strong>Courses:</strong>
                    {schedule.map((course: Course) => (
                        <li
                            key={course.id + course.credits}
                            style={{
                                display: "flex",
                                height: "33px",
                                border: "1px solid black"
                            }}
                        >
                            <Col>{course.id} </Col>
                            <Col>
                                <DropdownMenu
                                    horizontal={true}
                                    buttons={[
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            key={1}
                                            onClick={() =>
                                                setShowAddModal(!showAddModal)
                                            }
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
            <div>
                <CourseEditor
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    course={course}
                    schedule={schedule}
                    setSchedule={setSchedule}
                ></CourseEditor>
            </div>
        </div>
    );
}
