import React, { useState } from "react";
import { Course, Semester } from "../interfaces/projectInterfaces";
import { Container, Row, Col, Form } from "react-bootstrap";

export function CourseEditor({ courses }: Semester): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Questions:</h3>
                    {/* Name */}
                    <Form.Group controlId="formQuestionName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuestionBody" as={Row}>
                        <Form.Label column sm={2}>
                            Body:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={body}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setBody(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuestion(question.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Question
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
