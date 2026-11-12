app.jsx
import { useState } from 'react';

function Student(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Student: {props.name}</h2>
      <p>Button clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

function App() {
  return <Student name="Ravi" />;
}
export default App;
