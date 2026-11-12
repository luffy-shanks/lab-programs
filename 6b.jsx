import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
    return (
        <div className="card">
            <h1>Student Details</h1>
            <p>Name: Ravi</p>
            <p>Course: CSE</p>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);
