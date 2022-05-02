import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plan, Semester } from "../interfaces/projectInterfaces";
import { SemesterCreator } from "./SemesterCreator";

export function PlanView({
    plan,
    plans,
    deletePlan,
    semesters,
    setPlan
}: {
    plan: Plan;
    plans: Plan[];
    deletePlan: (id: number) => void;
    semesters: Semester[][];
    setPlan: (plans: Plan[]) => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{plan.id}</h3>
                    <Button
                        onClick={() => deletePlan(plan.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Plan
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
