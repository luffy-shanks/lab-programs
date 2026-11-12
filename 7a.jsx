import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Click the button to respond to an event.");

  function handleClick() {
    setMessage("Button click event handled successfully!");
  }

  return (
    <main>
      <h1>React Event Handling</h1>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </main>
  );
}
