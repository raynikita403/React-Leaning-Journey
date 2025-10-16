import './App.css';
/*
Task / Assignment:
create new react write some code with jsx elements and tags like create parent div
tag where create 2 child div tags 1st child div create simple navbar with ol or ul tags
with styling, and 2nd child div write some tags and render some js code in it.
*/
function App() {
  const studentName = "Nikita Ray";
  const course = "Full Stack Development";
  const date = new Date().toLocaleDateString();
  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

  return (
   
    <div>
      
      <div className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <a className="navbar-brand fw-bold" href="#">
            My React App
          </a>

         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    
      <div className="container my-5 text-center">
        <div className="card shadow-lg p-4 border-0">
          <h2 className="text-primary mb-3">Welcome, {studentName}</h2>
          <p className="lead mb-4">
            You are enrolled in the <strong>{course}</strong> course.
          </p>
          <p>
            Today's Date: <strong>{date}</strong>
          </p>

          <h5 className="mt-4 text-success">Your Technical Skills:</h5>
          <ul class="list-unstyled">
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
