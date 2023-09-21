import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. David Neufeld
            </p>
            <h1>Hello World</h1>
            <img
                src="../assets/images/pet-ada.jpg"
                alt="A picture of my dog Ada"
            />
            Ordered List:
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
        </div>
    );
}

export default App;
