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
    selectSemester: (semester: Semester) => void;
}) {
    const [pickSemester, setPickSemester] = useState<string>(semesters[0].id);

    function saveChanges(index: number) {
        const CourseListFrom = schedule.map(
            (course: Course): Course => ({ ...course })
        );
        const CourseListTo = schedule.map(
            (course: Course): Course => ({ ...course })
        );
        const newSemesters = semesters.map(
            (semester: Semester): Semester => ({ ...semester })
        ); //add alert
        newSemesters[index] = { ...newSemesters[index], id: pickSemester };
        if (
            newSemesters.filter(
                (asemester: Semester) => asemester.id == pickSemester
            ).length > 1
        ) {
            alert("A semester with that ID already exists");
        } else if (parseInt(newSemesters[index].id.split(" ")[1]) > 4444) {
            alert("Semester year must be within the next 2 milenia");
        } else {
            //console.log(newSemesters);
            setSemesters(newSemesters);
            selectSemester(newSemesters[index]);
            handleClose();
        }
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
