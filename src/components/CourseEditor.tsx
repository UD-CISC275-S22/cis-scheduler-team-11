import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Course } from "../interfaces/projectInterfaces";
import catalog from "../data/catalog.json";

const categories = Object.keys(catalog);

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
    const [code, setCode] = useState<string>("");
    const [codeCat, setCodeCat] = useState<string>("");
    const [codeNum, setCodeNum] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [descr, setDescr] = useState<string>("");
    const [credits, setCredits] = useState<string>("");
    const [preReq, setPreReq] = useState<string>("");
    const [restrict, setRestrict] = useState<string>("");
    const [breadth, setBreadth] = useState<string>("");
    const [typ, setTyp] = useState<string>("");
    const uid = course.uid;
    const [check, setCheck] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);

    function updateCredits(credits: string) {
        if (credits.length <= 0) {
            credits = "0";
        }
        setCredits(credits);
    }

    function saveChanges(index: number) {
        const newCourses = schedule.map(
            (course: Course): Course => ({ ...course })
        );
        newCourses[index] = {
            code: code,
            name: name,
            descr: descr,
            credits: credits,
            preReq: preReq,
            restrict: restrict,
            breadth: breadth,
            typ: typ,
            uid: uid
        };
        const codenameList = newCourses.filter(
            (crs: Course) =>
                crs.code + crs.name.toLowerCase ===
                newCourses[index].code + newCourses[index].name.toLowerCase()
        );
        const codeList = newCourses.filter(
            (crs: Course) => crs.code === newCourses[index].code
        );
        const nameList = newCourses.filter(
            (crs: Course) =>
                crs.name.toLowerCase() === newCourses[index].name.toLowerCase()
        );
        if (codenameList.length > 1) {
            alert(
                "You cannot have multiple courses with the same code and title"
            );
        } else {
            if (codeList.length > 1) {
                setCheck(true);
            }
            if (nameList.length > 1) {
                setCheck(true);
            }
            //console.log("check" + check);
            //console.log("checked" + checked);
            if (check && !checked) {
                alert("Some courses have the same code or title!");
                setChecked(true);
            } else {
                if (!check) {
                    setSchedule(newCourses);
                    handleClose();
                    setChecked(false);
                }
                if (checked) {
                    setSchedule(newCourses);
                    handleClose();
                    setChecked(false);
                }
            }
        }
    }

    function refresh() {
        setCode(course.code);
        setCodeCat(course.code.split(" ")[0]);
        setCodeNum(course.code.split(" ")[1]);
        setName(course.name);
        setDescr(course.descr);
        setCredits(course.credits);
        setPreReq(course.preReq);
        setRestrict(course.restrict);
        setBreadth(course.breadth);
        setTyp(course.typ);
        console.log(course);
    }

    return (
        <Modal
            className="modal"
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
                <Form.Group controlId="Edit Code" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Edit Code:
                    </Form.Label>
                    <Col>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            inputValue={codeCat}
                            onChange={(e, v) =>
                                setCodeCat(v === null ? " " : v.toUpperCase())
                            }
                            value={codeCat}
                            options={categories}
                            //map the options
                            sx={{ width: 200, background: "white" }}
                            renderInput={(params) => (
                                <TextField
                                    value={codeCat}
                                    {...params}
                                    label="Course"
                                    onChange={({ target }) =>
                                        setCodeCat(target.value.toUpperCase())
                                    }
                                />
                            )}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            value={codeNum}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setCodeNum(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="Edit Name" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Title:
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
                <Form.Group controlId="Edit Credits" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Credits:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={credits}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => updateCredits(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="Edit Prerequisites" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Prerequisites:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={preReq}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setPreReq(event.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="Edit Restrictions" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Restrictions:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={restrict}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setRestrict(event.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="Edit Breadth" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Breadth:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={breadth}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setBreadth(event.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group controlId="Edit Type" as={Row} spacing={2}>
                    <Form.Label className="modalTextCol" column sm={2}>
                        Type:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={typ}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTyp(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            {!check || !checked ? (
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            saveChanges(
                                schedule.findIndex(
                                    (aCourse: Course) =>
                                        aCourse.code === course.code
                                )
                            )
                        }
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            ) : (
                <Modal.Footer>
                    {
                        "Are you sure you want to have to courses with the same code or title?"
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            saveChanges(
                                schedule.findIndex(
                                    (aCourse: Course) =>
                                        aCourse.code === course.code
                                )
                            )
                        }
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            )}
        </Modal>
    );
}
