import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Semester, Course } from "../interfaces/projectInterfaces";

export function CourseMove({
    show,
    handleClose,
    course,
    schedule,
    setSchedule,
    semester,
    semesters,
    setSemesters,
    setSelectedSemester,
    selectSemester
}: {
    show: boolean;
    handleClose: () => void;
    course: Course;
    schedule: Course[];
    setSchedule: (courses: Course[]) => void;
    semester: Semester;
    semesters: Semester[];
    setSemesters: (semester: Semester[]) => void;
    setSelectedSemester: (semester: Semester) => void;
    selectSemester: (semester: Semester) => void;
}) {
    const [pickSemester, setPickSemester] = useState<string>(semesters[0].id);

    function saveChanges(index: number) {
        const CourseListFrom = schedule.filter(
            (aCourse) => aCourse.code != course.code
        );
        setSchedule(CourseListFrom);
        setSelectedSemester(
            semesters.filter((sem: Semester) => sem.id === pickSemester)[0]
        );
        setSchedule({
            ...semesters.filter((sem: Semester) => sem.id === pickSemester)[0]
                .courses,
            course
        });
    }
    function refresh() {
        setPickSemester(semester.id);
    }
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        setPickSemester(event.target.value);
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            onShow={refresh}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="formMoveCourse" as={Row}>
                    <Form.Label> Move Course:</Form.Label>
                    <Col>
                        <Form.Label>Select Semester</Form.Label>
                        <Form.Select
                            value={pickSemester}
                            onChange={updateSemester}
                        >
                            {semesters.map((semester: Semester) => (
                                <option key={semester.id} value={semester.id}>
                                    {semester}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={() =>
                        saveChanges(
                            semesters.findIndex(
                                (aSemester: Semester) =>
                                    aSemester.id === semester.id
                            )
                        )
                    }
                >
                    Move
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
