import React from "react";
import Single_Semester_Display from "./components/single_semester";
import "./App.css";
import { ClassPicker } from "./components/ClassPicker";

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
            <Single_Semester_Display
                id={""}
                courses={[]}
            ></Single_Semester_Display>
        </div>
    );
}

export default App;
