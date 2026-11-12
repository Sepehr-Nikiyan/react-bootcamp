import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Card from "./components/Card";
import { useState } from "react";

// Main App component
function App() {
  function handleClick(message) {
    alert(message);
  }
  function handleEvent(event) {
    console.log(event.target);
  }
  function handleButtonClick(event,buttonName) {
    console.log(event.target);
    alert(buttonName);
  }

  const name = "Sepehr";

  const user = {
    name: "Sepehr",
    age: 25,
    job: "Developer"
  };

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const isLoggedIn = false;

  const isDeveloper = true;

  let loginMessage;

  if (isLoggedIn === true) {
    loginMessage = "Welcome Back!"
  }else{
    loginMessage = "Please Login"
  };

  //useState practice
  const [count,setCount] = useState(0);

  return (
    <div>
      {/* {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>} */}
      <h2>{loginMessage}</h2>
      {isDeveloper && <p>You are a developer!</p>}

      <Header title="My React Website" description="Learning React step by step" />
      <Header title="My Portfolio" description="Learning React step by step" />
      <Header title="My Blog" description="Learning React step by step" />

      <Navbar />

      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>
      <button onClick={handleEvent}>Show Event Target</button>
      <br />
      <button onClick={(event)=>{handleButtonClick(event,"First Button")}}>First Button</button>
      <br />
      <button onClick={(event)=>{handleButtonClick(event,"Second Button")}}>Second Button</button>

      <h3>count: {count}</h3>

      <Card>
        <h3>This is my first card.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, repudiandae?</p>
      </Card>
      <button onClick={() => handleClick("You clicked the first button!")}>click here</button>

      <Card>
        <h3>This is a test list of my skills.</h3>
        <ul>{skills.slice(0,3).map((skill) => {return <li key={skill}>{skill}</li>})}</ul>
      </Card>
      <button onClick={() => handleClick("You clicked the second button!")}>click here</button>

      <Profile user={user} skills={skills} role="Manager" />

      <Footer />
    </div>
  );
}

export default App;