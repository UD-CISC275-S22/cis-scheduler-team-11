import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Course } from "../interfaces/projectInterfaces";
//import { EditableSongList } from "./EditableSongList";

export function CourseEditor({
    show,
    handleClose,
    course,
    editCourse
}: {
    show: boolean;
    handleClose: () => void;
    course: Course;
    editCourse: (id: string, newCourse: Course) => void;
}) {
    const [id, setId] = useState<string>(course.id);
    const [title, setTitle] = useState<string>(course.title);
    const [credits, setCredits] = useState<number>(course.credits);
    const [enrolled, setEnrolled] = useState<boolean>(course.enrolled);

    function saveChanges() {
        editCourse(course.id, {
            ...course,
            title: title,
            credits: credits,
            enrolled: enrolled
        });
        handleClose();
    }
    function updateCredits(credits: string) {
        setCredits(parseInt(credits));
    }
    function updateEnrolled() {
        setEnrolled(!enrolled);
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="formMovieId" as={Row}>
                    <Form.Label>Course:</Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={credits.toString()}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => updateCredits(event.target.value)}
                        />
                    </Col>
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
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
