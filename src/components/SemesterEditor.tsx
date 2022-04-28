import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Semester, Course } from "../interfaces/projectInterfaces";

export function SemesterEditor({
    show,
    handleClose,
    semester,
    semesters,
    setSemesters
}: {
    show: boolean;
    handleClose: () => void;
    semester: Semester;
    semesters: Semester[];
    setSemesters: (semester: Semester[]) => void;
}) {
    const [id, setId] = useState<string>("");
    const [courses] = useState<Course[]>([]);

    function saveChanges(index: number) {
        const newSemesters = semesters.map(
            (semester: Semester): Semester => ({ ...semester })
        );
        newSemesters[index] = {
            id: id,
            courses: courses
        };
        setSemesters(newSemesters);
        handleClose();
    }
    function refresh() {
        setId(semester.id);
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
                <Form.Group controlId="formMovieId" as={Row}>
                    <Form.Label>Semester:</Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
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
                            semesters.findIndex(
                                (aSemester: Semester) =>
                                    aSemester.id === semester.id
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
