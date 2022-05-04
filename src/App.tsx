import React, { useState } from "react";
import { Form /*, Button */ } from "react-bootstrap";

import "./App.css";
/*
import { Course, Plan } from "./interfaces/projectInterfaces";
import courses from "./data/courses.json";*/

import { MainView } from "./components/MainView";
/*
import MultipleSemester from "./components/MultipleSemester";
import YearView from "./components/YearView";
import { PlanCreator } from "./components/PlanCreator";
import { SemesterCreator } from "./components/SemesterCreator";
import { DropdownMenu } from "./components/DropdownMenu";
import { ClassPicker } from "./components/ClassPicker";
import { PlanHide } from "./components/PlanHide";*/
/*
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);*/

function App(): JSX.Element {
    //const [plans, setPlans] = useState<Plan[]>([]);
    const [name, setName] = useState<string>("UD Student");
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript By Shaun Gupta &
                Andrew Long & Andrew Gkonos!
            </header>
            <div>
                <Form.Group controlId="formName">
                    <Form.Label>What is your Name?</Form.Label>
                    <Form.Control
                        placeholder="insert your name"
                        value={name}
                        onChange={updateName}
                    />
                </Form.Group>
            </div>
            <h1>Welcome to your scheduler, {name}!</h1>
            <h2>Here you will see all of your classes for your major!</h2>
            <h3>
                Below you will see which courses you need to take during which
                semesters.
            </h3>
            <br />
            <MainView />
            ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            {/*
            <PlanHide Plans={plans} setPlan={setPlans}></PlanHide>
            <PlanCreator></PlanCreator>
            
            <DropdownMenu
                horizontal={false}
                buttons={[
                    <Button size="sm" key={1}>
                        edit
                    </Button>,
                    <Button size="sm" key={2}>
                        delete
                    </Button>,
                    <Button size="sm" key={3}>
                        move
                    </Button>,
                    <Button size="sm" key={4}>
                        option1
                    </Button>,
                    <Button size="sm" key={5}>
                        option2
                    </Button>,
                    <Button size="sm" key={6}>
                        option3
                    </Button>,
                    <Button size="sm" key={7}>
                        option4
                    </Button>
                ]}
            />
            <MultipleSemester
                semesters={[
                    {
                        id: "Fall 2022",
                        courses: [
                            COURSES[0],
                            COURSES[1],
                            COURSES[2],
                            COURSES[3]
                        ]
                    },
                    {
                        id: "Spring 2022",
                        courses: [COURSES[1], COURSES[2]]
                    },
                    {
                        id: "Fall 2023",
                        courses: [COURSES[3]]
                    },
                    {
                        id: "Spring 2023",
                        courses: [COURSES[4], COURSES[5]]
                    },
                    {
                        id: "Fall 2024",
                        courses: [COURSES[3]]
                    },
                    {
                        id: "Spring 2024",
                        courses: [COURSES[4], COURSES[5]]
                    }
                ]}
            />
            <YearView
                id={1}
                semesters={[
                    [
                        {
                            id: "Fall 2022",
                            courses: [
                                COURSES[0],
                                COURSES[1],
                                COURSES[2],
                                COURSES[3]
                            ]
                        },
                        {
                            id: "Spring 2022",
                            courses: [COURSES[1], COURSES[2]]
                        }
                    ],
                    [
                        {
                            id: "Fall 2023",
                            courses: [COURSES[3]]
                        },
                        {
                            id: "Spring 2023",
                            courses: [COURSES[4], COURSES[5]]
                        }
                    ],
                    [
                        {
                            id: "Fall 2024",
                            courses: [COURSES[3]]
                        },
                        {
                            id: "Spring 2024",
                            courses: [COURSES[4], COURSES[5]]
                        }
                    ]
                ]}
            />
            */}
        </div>
    );
}

export default App;
