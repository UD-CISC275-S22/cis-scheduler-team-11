import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Course } from "../interfaces/projectInterfaces";
export function CourseEditor({
    show,
    handleClose,
    course,
    schedule,
    setSchedule
}: {
    show: boolean;
    handleClose: () => void;
    course: Course;
    schedule: Course[];
    setSchedule: (courses: Course[]) => void;
}) {
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    const [enrolled, setEnrolled] = useState<boolean>(false);

    function updateCredits(credits: string) {
        if (credits.length <= 0) {
            credits = "0";
        }
        setCredits(parseInt(credits));
    }
    function saveChanges(index: number) {
        const newCourses = schedule.map(
            (course: Course): Course => ({ ...course })
        );
        newCourses[index] = {
            id: id,
            title: title,
            credits: credits,
            enrolled: enrolled
        };
        setSchedule(newCourses);
        handleClose();
    }
    function refresh() {
        setId(course.id);
        setTitle(course.title);
        setCredits(course.credits);
        setEnrolled(course.enrolled);
    }
    function updateEnrolled() {
        setEnrolled(!enrolled);
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            onShow={refresh}
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="Edit Id" as={Row}>
                    <Form.Label column="sm">Course ID:</Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="Edit Title" as={Row}>
                    <Form.Label column="sm">Course Title:</Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="Edit Credits" as={Row}>
                    <Form.Label column="sm">Course Credits:</Form.Label>
                    <Col>
                        <Form.Control
                            value={credits.toString()}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => updateCredits(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="edit Enrolled" as={Row}>
                    <Form.Label column="sm">Course Enrolled?:</Form.Label>
                    <Col>
                        <Form.Check
                            type="switch"
                            id="isEnrolles"
                            label="Enrolled?"
                            checked={enrolled}
                            onChange={updateEnrolled}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() =>
                        saveChanges(
                            schedule.findIndex(
                                (aCourse: Course) => aCourse.id === course.id
                            )
                        )
                    }
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
