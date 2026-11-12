import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <h2>
                {loggedIn ? 'Welcome User' : 'Please Login'}
            </h2>

            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);
