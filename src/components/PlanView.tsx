import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Plan, Semester } from "../interfaces/projectInterfaces";
import { SemesterCreator } from "./SemesterCreator";
import { DropdownMenu } from "./DropdownMenu";

export function PlanView({
    plan,
    deletePlan
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
                    <DropdownMenu
                        horizontal={true}
                        buttons={[
                            <Button variant="secondary" size="sm" key={1}>
                                edit
                            </Button>
                        ]}
                    />
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
