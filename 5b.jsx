import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const name = 'Ravi';
    const marks = 85;

    return (
        <div>
            <h1>Student Details</h1>
            <p>Name: {name}</p>
            <p>Marks: {marks}</p>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);
