import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Student(props) {
    const [marks, setMarks] = useState(80);

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Marks: {marks}</p>
            <button onClick={() => setMarks(marks + 5)}>
                Increase Marks
            </button>
        </div>
    );
}

function App() {
    return <Student name="Ravi" />;
}

createRoot(document.getElementById('root')).render(<App />);
