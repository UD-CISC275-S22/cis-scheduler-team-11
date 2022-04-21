import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Course } from "../interfaces/projectInterfaces";

export function HandleEditing({
    editing,
    course,
    editCourse
}: {
    editing: boolean;
    course: Course;
    editCourse: (id: string, newCourse: Course) => void;
}): JSX.Element {
    const [id, setId] = useState<string>(course.id);
    const [title, setTitle] = useState<string>(course.title);
    const [credits, setCredits] = useState<number>(course.credits);
    const [strCredits, setStringCredits] = useState<string>(
        course.credits.toString()
    );
    function save() {
        editCourse(course.id, {
            ...course,
            title: title,
            // questions: parseInt(questionNum) || 0,
            credits: credits
        });
        editing = !editing;
    }
    function cancel() {
        editing = !editing;
    }
    function updateCredits(credits: string) {
        setStringCredits(credits);
        setCredits(parseInt(strCredits));
    }
    return (
        <div>
            <div className="EditCourse">
                {editing && (
                    <Form.Group controlId="editCourse" as={Row}>
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        ></Form.Control>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        ></Form.Control>
                        <Form.Label>Credits</Form.Label>
                        <Form.Control
                            type="number"
                            value={strCredits}
                            onChange={() => updateCredits(strCredits)}
                        ></Form.Control>
                        <Button
                            onClick={save}
                            variant="success"
                            className="me-4"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={cancel}
                            variant="warning"
                            className="me-5"
                        >
                            Cancel
                        </Button>
                    </Form.Group>
                )}
            </div>
        </div>
    );
}