app.jsx
import React from 'react';

function App() {
  return React.createElement(
    'div', null,
    React.createElement('h1', null, 'Hello React'),
    React.createElement('p', null, 'This is my first React program.')
  );
}
export default App;
main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
