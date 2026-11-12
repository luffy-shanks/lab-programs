import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const students = ['Ravi', 'Sita', 'Arun', 'Priya'];

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={student}>
                        {student}
                    </li>
                ))}
            </ul>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);
