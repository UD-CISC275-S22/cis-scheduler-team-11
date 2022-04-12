import React from "react";
//import SingleSemester from "./components/SingleSemester";

import "./App.css";
import { ClassPicker } from "./components/ClassPicker";

import { Course } from "./interfaces/Course";
import courses from "./data/courses.json";
import MultipleSemester from "./components/MultipleSemester";
const COURSES = courses.map(
    (course): Course => ({
        ...course
    })
);

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript By Shaun Gupta &
                Andrew Long & Andrew Gkonos!
            </header>
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
