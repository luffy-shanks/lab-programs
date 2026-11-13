app.jsx
import React from 'react'; 
import { createRoot } from 'react-dom/ client';

function App() {
  return(
    <div>
      <h1>Welcome to ReactJS</h1>
      <p>This is my first React application.</p>
    </div>
  );
}
createRoot(document.getElementById('root')) .render(<App />);
index.html

<!DOCTYPE html>
<html>
<head>
  <title>React App</title>
</head>
<body>
  <div id="root"></div> <script type="module" src="/src/App.jsx"></script>

</body>

</html>
