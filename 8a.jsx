const students = ["Anu", "Bala", "Chitra"];

export default function App() {
  return (
    <main>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => <li key={student}>{index + 1}. {student}</li>)}
      </ul>
    </main>
  );
}
