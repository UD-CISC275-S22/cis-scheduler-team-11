import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import courses from "../data/courses.json";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);
const SEASONS = ["Fall", "Winter", "Spring", "Summer"];
const SEMESTERS: Semester[] = [];

export function CoursePicker(): JSX.Element {
    const [course, setCourse] = useState<string>("");
    const [semesterSeason, setSemesterSeason] = useState<string>(SEASONS[0]);
    const [semesterYear, setSemesterYear] = useState<number>(2022);
    const [semesterList, setSemesterList] = useState<Semester[]>(SEMESTERS);
    const [schedule, setSchedule] = useState<string[]>([]);

    function chooseSchedule(course: string) {
        const newSchedule = [...schedule, course];
        if (!schedule.includes(course)) {
            setSchedule(newSchedule);
            setSemester();
        }
    }
    function updateSemester(semester: Semester) {
        setSemester(semester);
    }
    function updateCoursePick(event: React.ChangeEvent<HTMLSelectElement>) {
        setCourse(event.target.value);
    }

    function clearSchedule() {
        setSchedule([]);
    }

    return (
        <div>
            <h3>Add Course</h3>
            <Row>
                <Col>
                    <Form.Group controlId="Semester">
                        <Form.Label>Choose Season</Form.Label>
                        <Form.Select value={semesterSeason}>
                            {SEASONS.map((season: string) => (
                                <option key={season} value={season}></option>
                            ))}
                        </Form.Select>
                        <Form.Control value={semesterYear} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="Courses">
                        <Form.Label>Choose Course</Form.Label>
                        <Form.Select value={course} onChange={updateCoursePick}>
                            {COURSES.map((course: Course) => (
                                <option key={course.id} value={course.id}>
                                    {course}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    Add{" "}
                    <Button onClick={() => chooseSchedule(course)}>
                        {course}
                    </Button>
                    {/* <h3>Add Courses to Semester</h3> */}
                    {/* {options.map((course: Course) => (
                        <div key={course.id} style={{ marginBottom: "4px" }}>
                            {course} {course.title}{" "}
                            <Button onClick={chooseSchedule}>Add Course</Button>
                        </div>
                    ))} */}
                </Col>
                <Col>
                    <strong>Semester:</strong>
                    {schedule.map((course: string) => (
                        <li key={course}>{course}</li>
                    ))}
                    <Button onClick={clearSchedule}>Clear Semester</Button>
                </Col>
            </Row>
        </div>
    );
}
