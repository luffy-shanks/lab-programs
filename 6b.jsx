import "./6b.css";

const courses = ["ReactJS", "ExpressJS", "MongoDB"];

export default function App() {
  return (
    <main className="course-card">
      <h1>Course List</h1>
      <p>Data displayed with CSS styling.</p>
      <ul>
        {courses.map((course) => <li key={course}>{course}</li>)}
      </ul>
    </main>
  );
}
