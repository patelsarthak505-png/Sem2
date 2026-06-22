import "./App.css";

function StudentCard({ image, name, course, year, cgpa }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>CGPA:</strong> {cgpa}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Profile Dashboard</h1>

      <div className="card-container">
        <StudentCard
          image="https://randomuser.me/api/portraits/men/1.jpg"
          name="Rahul Sharma"
          course="B.Tech CSE"
          year="3rd Year"
          cgpa="8.5"
        />

        <StudentCard
          image="https://randomuser.me/api/portraits/women/1.jpg"
          name="Priya Singh"
          course="BCA"
          year="2nd Year"
          cgpa="9.1"
        />
      </div>
    </div>
  );
}

export default App;