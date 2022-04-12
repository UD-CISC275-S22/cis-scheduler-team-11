import React, { useState } from "react";
//import SingleSemester from "./components/SingleSemester";

import "./App.css";
import { ClassPicker } from "./components/ClassPicker";
import { Course } from "./interfaces/projectInterfaces";
import courses from "./data/courses.json";
import MultipleSemester from "./components/MultipleSemester";
import SingleSemester from "./components/SingleSemester";
import { Form } from "react-bootstrap";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);

function App(): JSX.Element {
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
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            </div>

            <h1>Welcome to your scheduler, {name}!</h1>
            <h2>Here you will see all of your classes for your major!</h2>
            <h3>
                Below you will see which courses you need to take during which
                semesters.
            </h3>
            <br />
            <ClassPicker></ClassPicker>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            {/*}
    <SingleSemester
        id={"Fall 2022"}
        courses={[COURSES[0], COURSES[1], COURSES[2]]}
    />
    {*/}
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
        </div>
    );
}

export default App;
