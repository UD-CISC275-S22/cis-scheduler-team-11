import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Semester, Plan } from "../interfaces/projectInterfaces";
import { SemesterEditor } from "./SemesterEditor";
import { ClassPicker } from "./ClassPicker";
import { DeleteAllSemesters } from "../deleteAllComponents/DeleteAllSemesters";
import { SemesterDropdownMenu } from "./SemesterDropdownMenu";
import { confirmAlert } from "react-confirm-alert";

export function SemesterCreator({
    updateSelectedPlan,
    selectedPlan,
    setSemMenuView
}: {
    updateSelectedPlan: (plan: Plan) => void;
    selectedPlan: Plan;
    setSemMenuView: (semMenuView: boolean) => void;
}): JSX.Element {
    const defaultSem: Semester = { id: "X 0", courses: [] };
    const semesterList = selectedPlan.semesters.flat();
    function CalcIdx(semester: Semester): number {
        return parseInt(semester.id.split(" ")[1]) - selectedPlan.start;
    }
    /*
    function CalcIdx2(semester: Semester): number {
        const seasons = ["Fall", "Winter", "Spring", "Summer"];
        return seasons.indexOf(semester.id.split(" ")[0]);
    }*/
    function setSemesterList(semList: Semester[]) {
        const newSems: Semester[][] = [[]];
        ////console.log(semList);
        const semListC = [...semList];
        /*console.log(
            semListC.sort(
                (sem: Semester, sem2: Semester) =>
                    CalcIdx2(sem) - CalcIdx2(sem2)
            )
        );*/
        semListC.map(
            (semester: Semester) =>
                (newSems[CalcIdx(semester)] =
                    newSems[CalcIdx(semester)] != null
                        ? newSems[CalcIdx(semester)].concat(semester)
                        : [semester])
        );
        updateSelectedPlan({
            ...selectedPlan,
            semesters: newSems.filter((year: Semester[]) => year.length > 0)
        });
        //console.log(newSems);
        //console.log(selectedPlan);
    }
    const [courseMenuView, setCourseMenuView] = useState<boolean>(false);
    const [selectedSemester, selectSemester] = useState<Semester>(defaultSem);
    if (semesterList.length > 0 && selectedSemester.id == "X 0") {
        selectSemester(selectedPlan.semesters[0][0]);
    }
    if (semesterList.length == 0 && selectedSemester.id != "X 0") {
        selectSemester(defaultSem);
    }

    function updateSelectedSemester(semester: Semester) {
        setSemesterList(
            selectedPlan.semesters
                .flat()
                .map((sem: Semester) =>
                    sem.id === selectedSemester.id ? semester : sem
                )
        );
        selectSemester(semester);
    }
    const [formSemesterSeason, setFormSemesterSeason] =
        useState<string>("Fall");
    const [formSemesterYear, setFormSemesterYear] = useState<string>("2000");
    /*
    function setSemesterSeason(season: string) {
        updateSelectedSemester({
            ...selectedSemester,
            id: season + " " + selectedSemester.id.split(" ")[1]
        });
    }
    function setSemesterYear(year: string) {
        updateSelectedSemester({
            ...selectedSemester,
            id: selectedSemester.id.split(" ")[0] + " " + year
        });
    }*/
    const [semester, setSemester] = [selectedSemester, selectSemester];

    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);
    //const semesterSeason = selected

    function addSemester(season: string, year: string) {
        if (parseInt(year) < 4444) {
            if (parseInt(year) >= selectedPlan.start) {
                const semesterId = season + " " + year;
                const newSemester = { id: semesterId, courses: [] };
                //setSemester(newSemester);
                const newSemesterList = [...semesterList, newSemester];
                //console.log(semesterList);
                //console.log(newSemesterList);
                const check = semesterList.filter(
                    ({ id }) => id === semesterId
                );
                if (check.length === 0) {
                    setSemesterList(newSemesterList);
                } else {
                    confirmAlert({
                        title: "Duplicate Semester Error",
                        message: "That semester already exists!",
                        buttons: [
                            {
                                label: "Ok",
                                onClick: () => undefined
                            }
                        ]
                    });
                }
            } else {
                confirmAlert({
                    title: "Semester Start Error",
                    message: "Semester year must be after plan start year",
                    buttons: [
                        {
                            label: "Ok",
                            onClick: () => undefined
                        }
                    ]
                });
            }
        } else {
            confirmAlert({
                title: "Time Traveler Error",
                message: "Semester year must be within the next 2 milenia",
                buttons: [
                    {
                        label: "Ok",
                        onClick: () => undefined
                    }
                ]
            });
        }
    }
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setFormSemesterSeason(event.target.value);
    }
    function deleteSpecificSemester(id: string) {
        setSemesterList(semesterList.filter((semester) => semester.id != id));
    }

    return (
        <div className="SemesterMain">
            <h1>Semesters</h1>
            <Container className="semesterAdd">
                <Row>
                    <Col>
                        <Form.Group
                            controlId="Semester"
                            className="semesterAddForm"
                        >
                            <Form.Label
                                style={{
                                    color: "white"
                                }}
                            >
                                Add Your Semesters
                            </Form.Label>
                            <Form.Select
                                value={formSemesterSeason}
                                onChange={updateSeason}
                            >
                                <option value="Fall">Fall</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                            </Form.Select>
                            <Form.Control
                                type="number"
                                value={formSemesterYear}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setFormSemesterYear(event.target.value)}
                            />
                            <Button
                                size="sm"
                                style={{
                                    backgroundColor: "#FBDB32",
                                    border: "2px solid white",
                                    color: "black",
                                    fontWeight: "bold"
                                }}
                                onClick={() =>
                                    addSemester(
                                        formSemesterSeason,
                                        formSemesterYear
                                    )
                                }
                            >
                                + Add
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col className="semesterAddListDelete">
                        <Form.Label
                            style={{
                                color: "white"
                            }}
                        >
                            Your Semesters:
                        </Form.Label>
                        <div className="semesterAddList">
                            {semesterList.map((semester: Semester) => (
                                <li
                                    className="SemesterList"
                                    key={semester.id}
                                    style={{
                                        display: "flex",
                                        height: "38px",
                                        border:
                                            semester.id === selectedSemester.id
                                                ? "3px solid white"
                                                : "2px solid gray",
                                        color: "black",
                                        backgroundColor: "#FBDB32"
                                    }}
                                >
                                    <Col>{semester.id} </Col>
                                    <Col>
                                        <SemesterDropdownMenu
                                            select={() => setSemester(semester)}
                                            edit={() => {
                                                selectSemester(semester);
                                                setShowAddModal(!showAddModal);
                                            }}
                                            del={() =>
                                                deleteSpecificSemester(
                                                    semester.id
                                                )
                                            }
                                        />
                                    </Col>
                                </li>
                            ))}
                        </div>
                        <br />
                        <div
                            style={{
                                position: "relative",
                                top: "-15px"
                            }}
                        >
                            <DeleteAllSemesters
                                semesterList={semesterList}
                                setSemesterList={setSemesterList}
                            ></DeleteAllSemesters>
                        </div>
                    </Col>
                </Row>
                <div style={{ padding: "5px" }}>
                    <Button
                        className="Buttons"
                        onClick={() => setSemMenuView(false)}
                        size="sm"
                        style={{
                            backgroundColor: "#FBDB32",
                            border: "2px solid white",
                            color: "black",
                            fontWeight: "bold"
                        }}
                    >
                        Hide Semester Menu
                    </Button>
                </div>
                <br />
                {!courseMenuView && selectedSemester.id != defaultSem.id ? (
                    <div>
                        <Button
                            onClick={() => setCourseMenuView(true)}
                            size="sm"
                            style={{
                                backgroundColor: "#FBDB32",
                                border: "2px solid white",
                                color: "black",
                                fontWeight: "bold"
                            }}
                        >
                            ??? Add Course Menu ???
                        </Button>
                    </div>
                ) : (
                    <></>
                )}
            </Container>
            {courseMenuView && selectedSemester.id != defaultSem.id && (
                <ClassPicker
                    setCourseMenuView={setCourseMenuView}
                    selectedSemester={selectedSemester}
                    updateSelectedSemester={updateSelectedSemester}
                />
            )}
            <div>
                <SemesterEditor
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    semester={semester}
                    semesters={semesterList}
                    selectSemester={selectSemester}
                    setSemesters={setSemesterList}
                />
            </div>
        </div>
    );
}
