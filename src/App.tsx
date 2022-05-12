import React, { useState } from "react";
import { Button, Form /*, Button */ } from "react-bootstrap";
import "./App.css";
import { MainView } from "./components/MainView";
import { CSVDownload } from "./components/CSVDownload";
import { Plan } from "./interfaces/projectInterfaces";

function App(): JSX.Element {
    const nameCheck = localStorage.getItem("mostRecentName");
    const [name, setName] = useState<string>(nameCheck ? nameCheck : " ");
    const startingPlan = localStorage.getItem(name);
    const [plans, setPlans] = useState<Plan[]>(
        startingPlan ? JSON.parse(startingPlan) : []
    );
    const [saveCheck, setSaveCheck] = useState<boolean>(false);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
        localStorage.setItem("mostRecentName", event.target.value);
        const newPlans: string | null = localStorage.getItem(
            event.target.value
        );
        console.log(
            event.target.value,
            localStorage.getItem(event.target.value)
        );
        setPlans(newPlans ? JSON.parse(newPlans) : []);
        if (
            JSON.stringify(newPlans ? JSON.parse(newPlans) : []) !=
            localStorage.getItem(event.target.value)
        ) {
            setSaveCheck(true);
        }
        if (
            JSON.stringify(newPlans ? JSON.parse(newPlans) : []) ===
            localStorage.getItem(event.target.value)
        ) {
            setSaveCheck(false);
        }
    }
    function setPlansUpdate(plans: Plan[]): void {
        setPlans(plans);
        if (JSON.stringify(plans) != localStorage.getItem(name)) {
            setSaveCheck(true);
        }
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
            <h2>
                Here you will see all of your plans to complete your degrees!
            </h2>
            <h3>
                Below you will see your degree plans, and their respective
                semesters and courses.
            </h3>
            <br />
            <MainView plans={plans} setPlans={setPlansUpdate} />
            {saveCheck ? (
                <Button
                    onClick={() => {
                        localStorage.setItem(name, JSON.stringify(plans));
                        setSaveCheck(false);
                    }}
                >
                    {" "}
                    Save your data!{" "}
                </Button>
            ) : (
                <span>Up to date with last save</span>
            )}
        </div>
    );
}

export default App;
