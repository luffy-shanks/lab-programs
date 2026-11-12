import { useState } from "react";

function Student({ name, course }) {
  return <p>{name} studies {course}.</p>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Props and State</h1>
      <Student name="Anu" course="ReactJS" />
      <p>Button clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </main>
  );
}
