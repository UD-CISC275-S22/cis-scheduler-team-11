import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Semester, Plan } from "../interfaces/projectInterfaces";
import { SemesterEditor } from "./SemesterEditor";
import { ClassPicker } from "./ClassPicker";
import { DropdownMenu } from "./DropdownMenu";

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
    function CalcIdx(semester: Semester, semesterList: Semester[]): number {
        return (
            parseInt(semester.id.split(" ")[1]) -
            parseInt(semesterList[0].id.split(" ")[1])
        );
    }
    function setSemesterList(semList: Semester[]) {
        const newSems: Semester[][] = [[]];
        //console.log(semList);
        semList.map(
            (semester: Semester) =>
                (newSems[CalcIdx(semester, semList)] =
                    newSems[CalcIdx(semester, semList)] != null
                        ? newSems[CalcIdx(semester, semList)].concat(semester)
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

    const [semesterSeason, setSemesterSeason] = useState<string>("Fall");
    const [semesterYear, setSemesterYear] = useState<string>("2022");
    const [semester, setSemester] = [selectedSemester, selectSemester];

    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);
    //const semesterSeason = selected

    function addSemester(season: string, year: string) {
        const semesterId = season + " " + year;
        const newSemester = { id: semesterId, courses: [] };
        //setSemester(newSemester);
        const newSemesterList = [...semesterList, newSemester];
        const check = semesterList.filter(({ id }) => id === semesterId);
        if (check.length === 0) {
            setSemesterList(newSemesterList);
        } else {
            alert("That semester already exists!");
        }
    }
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSemesterSeason(event.target.value);
    }
    function deleteSemester() {
        setSemesterList([]);
    }

    function deleteSpecificSemester(id: string) {
        setSemesterList(semesterList.filter((semester) => semester.id != id));
    }

    return (
        <div>
            <Container className="semesterAdd">
                <Row>
                    <Col>
                        <Form.Group
                            controlId="Semester"
                            className="semesterAddForm"
                        >
                            <Form.Label>Add Semester</Form.Label>
                            <Form.Select
                                value={semesterSeason}
                                onChange={updateSeason}
                            >
                                <option value="Fall">Fall</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>
                            </Form.Select>
                            <Form.Control
                                type="number"
                                value={semesterYear}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setSemesterYear(event.target.value)}
                            />
                            <Button
                                size="sm"
                                onClick={() =>
                                    addSemester(semesterSeason, semesterYear)
                                }
                            >
                                Add
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col className="semesterAddListDelete">
                        <strong>Semester:</strong>
                        <div className="semesterAddList">
                            {semesterList.map((semester: Semester) => (
                                <li
                                    key={semester.id}
                                    style={{
                                        display: "flex",
                                        height: "33px",
                                        border: "1px solid black",
                                        backgroundColor:
                                            semester.id === selectedSemester.id
                                                ? "green"
                                                : "grey"
                                    }}
                                >
                                    <Col>{semester.id} </Col>
                                    <Col>
                                        <DropdownMenu
                                            horizontal={true}
                                            buttons={[
                                                <Button
                                                    size="sm"
                                                    key={3}
                                                    onClick={() =>
                                                        selectSemester(semester)
                                                    }
                                                >
                                                    Select
                                                </Button>,
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    key={1}
                                                    onClick={() =>
                                                        setShowAddModal(
                                                            !showAddModal
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>,
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    key={2}
                                                    onClick={() =>
                                                        deleteSpecificSemester(
                                                            semester.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            ]}
                                        />
                                    </Col>
                                </li>
                            ))}
                        </div>
                        <Button onClick={deleteSemester}>
                            Delete Semester
                        </Button>
                    </Col>
                </Row>
                <div>
                    <Button onClick={() => setSemMenuView(false)}>
                        Hide Semester Menu
                    </Button>
                </div>
                {!courseMenuView && selectedSemester.id != defaultSem.id ? (
                    <div>
                        <Button onClick={() => setCourseMenuView(true)}>
                            Show Course Menu
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
                    setSemesters={setSemesterList}
                ></SemesterEditor>
            </div>
        </div>
    );
}
