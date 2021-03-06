import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import { CourseEditor } from "./CourseEditor";
import TextField from "@mui/material/TextField";
import { Course, Semester } from "../interfaces/projectInterfaces";
//import courses from "../data/courses.json";
import catalog from "../data/catalog.json";
import { DeleteAllCourses } from "../deleteAllComponents/DeleteAllCourses";
import SingleSemester from "./SingleSemester";
import { CourseDropdownMenu } from "./CourseDropdownMenu";
import { confirmAlert } from "react-confirm-alert";

/*const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);*/
const COURSES: Course[] = Object.values(catalog)
    .flat()
    .map((category) => Object.values(category).flat())
    .flat()
    .map((crs) => ({ ...crs, uid: -1 }));
////console.log(COURSES);
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
    const [selectedCourse, selectCourse] = useState<Course>(defaultCourse);
    if (
        selectedSemester.courses.length > 0 &&
        selectedCourse == defaultCourse
    ) {
        selectCourse(selectedSemester.courses[0]);
    }
    if (
        selectedSemester.courses.length == 0 &&
        selectedCourse != defaultCourse
    ) {
        selectCourse(defaultCourse);
    }
    //console.log("test2");
    //console.log(selectedSemester);
    /*
    if (selectedSemester.courses.length > 0 && selectedCourse.code === " ") {
        selectCourse(selectedSemester.courses[0]);
    }
    if (selectedSemester.courses.length == 0 && selectedCourse.code != " ") {
        selectCourse(defaultCourse);
    }*/
    const [UID, setUID] = useState<number>(0);
    const schedule = selectedSemester.courses;
    function setSchedule(courses: Course[]) {
        updateSelectedSemester({ ...selectedSemester, courses: courses });
    }
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);

    function chooseSchedule() {
        const possible = COURSES.find(
            (crs: Course) => crs.code === course.code
        );
        const courseInfo: Course = possible
            ? { ...possible }
            : { ...course, code: "error" };
        const newCourse: Course = { ...courseInfo, uid: UID };
        setUID(UID + 1);
        const newSchedule: Course[] = [...schedule, newCourse];
        if (possible) {
            const check = schedule.filter(({ code, name }) => {
                /*console.log(
                UID,
                code + name.toLowerCase(),
                course.code + course.name.toLowerCase(),
                code + name.toLowerCase() ===
                    course.code + course.name.toLowerCase()
            );*/
                return (
                    code + name.toLowerCase() ===
                    course.code + possible.name.toLowerCase()
                );
            });
            //console.log("check");
            //console.log(check, check.length, "\n", course.code + course.name);
            if (check.length === 0 && possible) {
                setSchedule(newSchedule);
            } else {
                confirmAlert({
                    title: "Double Course Error",
                    message:
                        "You are already enrolled in that course in this semester",
                    buttons: [
                        {
                            label: "Ok",
                            onClick: () => undefined
                        }
                    ]
                });
            }
        } else {
            confirmAlert({
                title: "Course Error 404",
                message: "That course does not exist!!!",
                buttons: [
                    {
                        label: "Ok",
                        onClick: () => undefined
                    }
                ]
            });
        }
    }
    function deleteSpecificCourse(course: Course) {
        setSchedule(schedule.filter(({ code }) => code !== course.code));
    }
    const [selSemView, setSelSemView] = useState<boolean>(false);

    return (
        <div className="ClassMain">
            <h1>Courses</h1>
            <Container className="Courses">
                <Col>
                    <Row className="ClassMain">
                        <Col className="CoursesLeft">
                            <Form.Group>
                                <Form.Label
                                    style={{
                                        color: "white"
                                    }}
                                >
                                    Select Course
                                </Form.Label>
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
                                    sx={{
                                        width: 200,
                                        textAlign: "center",
                                        align: "center",
                                        backgroundColor: "white"
                                    }}
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
                                {COURSES.find(
                                    (crs: Course) => crs.code === course.code
                                ) && (
                                    <Button
                                        onClick={() => chooseSchedule()}
                                        style={{
                                            backgroundColor: "#fbdb32",
                                            color: "black",
                                            border: "2px solid white"
                                        }}
                                    >
                                        Add Course
                                    </Button>
                                )}
                                {!COURSES.find(
                                    (crs: Course) => crs.code === course.code
                                ) && "This is not a valid course!"}
                            </Form.Group>
                        </Col>
                        <Col className="CoursesRight">
                            <Form.Label
                                style={{
                                    color: "white"
                                }}
                            >
                                Courses:
                            </Form.Label>
                            <div className="CoursesAddList">
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
                                            height: "38px",
                                            border:
                                                selectedCourse === course
                                                    ? "3px solid white"
                                                    : "2px solid gray",
                                            color: "black",
                                            backgroundColor: "#fbdb32"
                                        }}
                                    >
                                        <Col
                                            style={{
                                                color: "black",
                                                backgroundColor: "#fbdb32"
                                            }}
                                        >
                                            {course.code}{" "}
                                        </Col>
                                        <Col
                                            style={{
                                                backgroundColor: "#fbdb32"
                                            }}
                                        >
                                            <CourseDropdownMenu
                                                select={() =>
                                                    selectCourse(course)
                                                }
                                                edit={() => {
                                                    selectCourse(course);
                                                    setShowAddModal(
                                                        !showAddModal
                                                    );
                                                }}
                                                del={() =>
                                                    deleteSpecificCourse(course)
                                                }
                                                move={() => 0}
                                            />
                                        </Col>
                                    </li>
                                ))}
                            </div>
                            <br />
                            <DeleteAllCourses
                                courseList={schedule}
                                setCourseList={setSchedule}
                            ></DeleteAllCourses>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <Button
                                onClick={() => setCourseMenuView(false)}
                                style={{
                                    backgroundColor: "#fbdb32",
                                    color: "black",
                                    border: "2px solid white"
                                }}
                            >
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
                {
                    //console.log("test1:")}
                }
                {
                    //console.log(selectedCourse)
                }
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
