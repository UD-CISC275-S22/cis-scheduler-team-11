import React, { useState } from "react";
import { Form /*, Button */ } from "react-bootstrap";
import "./App.css";
import { MainView } from "./components/MainView";

function App(): JSX.Element {
    //const [plans, setPlans] = useState<Plan[]>([]);
    const [name, setName] = useState<string>("");
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
        </div>
    );
}

export default App;
