import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Card from "./components/Card";

// Main App component
function App() {
  const name = "Sepehr";

  const user = {
    name: "Sepehr",
    age: 25,
    job: "Developer"
  };

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>}

      <Header title="My React Website" description="Learning React step by step" />
      <Header title="My Portfolio" description="Learning React step by step" />
      <Header title="My Blog" description="Learning React step by step" />

      <Navbar />

      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>

      <Card>
        <h3>This is my first card.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, repudiandae?</p>
      </Card>

      <Card>
        <h3>This is a test list of my skills.</h3>
        <ul>{skills.slice(0,3).map((skill) => {return <li key={skill}>{skill}</li>})}</ul>
      </Card>

      <Profile user={user} skills={skills} role="Manager" />

      <Footer />
    </div>
  );
}

export default App;