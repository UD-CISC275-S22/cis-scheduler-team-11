import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import { CourseEditor } from "./CourseEditor";
import TextField from "@mui/material/TextField";
import { Course, Semester } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
import courses from "../data/courses.json";
import SingleSemester from "./SingleSemester";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);

export function ClassPicker({
    setCourseMenuView,
    selectedSemester,
    updateSelectedSemester
}: {
    setCourseMenuView: (courseMenuView: boolean) => void;
    selectedSemester: Semester;
    updateSelectedSemester: (semester: Semester) => void;
}): JSX.Element {
    const [course, setCourse] = useState<Course>(COURSES[0]);
    const schedule = selectedSemester.courses;
    function setSchedule(courses: Course[]) {
        updateSelectedSemester({ ...selectedSemester, courses: courses });
    }
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);

    function chooseSchedule() {
        const newSchedule = { ...course };
        const newScheduleList = [...schedule, newSchedule];
        const check = schedule.filter(({ id }) => id === course.id);
        if (check.length === 0) {
            setSchedule(newScheduleList);
        } else {
            alert("You are already enrolled in that course in this semester");
        }
    }
    function clearSchedule() {
        setSchedule([]);
    }
    function deleteSpecificCourse(course: Course) {
        setSchedule(schedule.filter(({ id }) => id !== course.id));
    }
    const [selSemView, setSelSemView] = useState<boolean>(false);

    return (
        <div>
            <Container className="Courses">
                <Col>
                    <Row>
                        <Col className="CoursesLeft">
                            <Form.Group>
                                <Form.Label>Select Course</Form.Label>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    inputValue={course.id}
                                    onChange={(e, v) =>
                                        setCourse({
                                            ...course,
                                            id:
                                                v === null
                                                    ? " "
                                                    : v.toUpperCase()
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
                        <Col className="CoursesRight">
                            <strong>Courses:</strong>
                            {schedule.flat().map((course: Course) => (
                                <li
                                    className="CoursesList"
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
                                                        setShowAddModal(
                                                            !showAddModal
                                                        )
                                                    }
                                                >
                                                    edit
                                                </Button>,
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    key={2}
                                                    onClick={() =>
                                                        deleteSpecificCourse(
                                                            course
                                                        )
                                                    }
                                                >
                                                    delete
                                                </Button>
                                            ]}
                                        />
                                    </Col>
                                </li>
                            ))}
                            <Button onClick={clearSchedule}>
                                Clear Courses
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <Button onClick={() => setCourseMenuView(false)}>
                                Hide Course Menu
                            </Button>
                        </div>
                    </Row>
                    <Row>
                        <Form.Check
                            type="switch"
                            id="edit-Semester-view"
                            label="Selected Semester View"
                            checked={selSemView}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setSelSemView(event.target.checked)}
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        />
                    </Row>
                </Col>
                <Col>
                    {selSemView && (
                        <SingleSemester
                            id={selectedSemester.id}
                            courses={selectedSemester.courses}
                        />
                    )}
                </Col>
            </Container>
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
