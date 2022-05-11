import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import { CourseEditor } from "./CourseEditor";
import TextField from "@mui/material/TextField";
import { Course, Semester } from "../interfaces/projectInterfaces";
import { DropdownMenu } from "./DropdownMenu";
//import courses from "../data/courses.json";
import catalog from "../data/catalog.json";
import SingleSemester from "./SingleSemester";

/*const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);*/
const COURSES = Object.values(catalog)
    .flat()
    .map((category) => Object.values(category).flat())
    .flat()
    .map((crs) => ({ ...crs, uid: -1 }));
//console.log(COURSES);
const defaultCourse = {
    code: " ",
    name: " ",
    descr: " ",
    credits: " ",
    preReq: " ",
    restrict: " ",
    breadth: " ",
    typ: " ",
    uid: -1
};

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
    const [selectedCourse, selectCourse] = useState<Course>(
        selectedSemester.courses[0]
            ? selectedSemester.courses[0]
            : defaultCourse
    );
    console.log("test2");
    console.log(selectedSemester);
    if (selectedSemester.courses.length > 0 && selectedCourse.code === " ") {
        selectCourse(selectedSemester.courses[0]);
    }
    if (selectedSemester.courses.length == 0 && selectedCourse.code != " ") {
        selectCourse(defaultCourse);
    }
    const [UID, setUID] = useState<number>(0);
    const schedule = selectedSemester.courses;
    function setSchedule(courses: Course[]) {
        updateSelectedSemester({ ...selectedSemester, courses: courses });
    }
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);

    function chooseSchedule() {
        setCourse(COURSES.filter((crs: Course) => crs.code === course.code)[0]);
        const newSchedule = { ...course, uid: UID };
        setUID(UID + 1);
        const newScheduleList = [...schedule, newSchedule];
        const check = schedule.filter(
            ({ code, name }) =>
                code + name.toLowerCase ===
                course.code + course.name.toLowerCase()
        );
        console.log("check");
        console.log(check);
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
        setSchedule(schedule.filter(({ code }) => code !== course.code));
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
                                    inputValue={course.code}
                                    onChange={(e, v) =>
                                        setCourse({
                                            ...course,
                                            code:
                                                v === null
                                                    ? " "
                                                    : v.toUpperCase()
                                        })
                                    }
                                    value={course.code}
                                    options={COURSES.map(
                                        (course: Course): string => course.code
                                    )}
                                    //map the options
                                    sx={{ width: 300, background: "white" }}
                                    renderInput={(params) => (
                                        <TextField
                                            value={course.code}
                                            {...params}
                                            label="Course"
                                            onChange={({ target }) =>
                                                setCourse({
                                                    ...course,
                                                    code: target.value.toUpperCase()
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
                                    key={
                                        course.code +
                                        course.name +
                                        course.credits +
                                        "  " +
                                        course.uid
                                    }
                                    style={{
                                        display: "flex",
                                        height: "33px",
                                        border: "1px solid black"
                                    }}
                                >
                                    <Col>{course.code} </Col>
                                    <Col>
                                        <DropdownMenu
                                            horizontal={true}
                                            buttons={[
                                                {
                                                    variant: "primary",
                                                    text: "Select",
                                                    click: () =>
                                                        selectCourse(course)
                                                },
                                                {
                                                    text: "Edit",
                                                    click: () => {
                                                        selectCourse(course);
                                                        setShowAddModal(
                                                            !showAddModal
                                                        );
                                                    }
                                                },
                                                {
                                                    variant: "danger",
                                                    text: "Delete",
                                                    click: () =>
                                                        deleteSpecificCourse(
                                                            course
                                                        )
                                                }
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
                {console.log("test1")}
                {console.log(selectedCourse)}
                <CourseEditor
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    course={selectedCourse}
                    schedule={schedule}
                    setSchedule={setSchedule}
                ></CourseEditor>
            </div>
        </div>
    );
}
