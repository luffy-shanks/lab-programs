import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <p>Welcome to ReactJS</p>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);
