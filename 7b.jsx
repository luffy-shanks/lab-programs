import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      <h1>Conditional Rendering</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
      {isLoggedIn ? <p>Welcome, student!</p> : <p>Please log in to continue.</p>}
    </main>
  );
}
