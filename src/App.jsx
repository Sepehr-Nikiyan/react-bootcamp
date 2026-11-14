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
  function handleButtonClick(event, buttonName) {
    console.log(event.target);
    alert(buttonName);
  }
  function increaseCount() {
    // setCount(count + 1);
    setCount((previousValue) => previousValue + 1);
  }
  function decreaseCount() {
    // setCount(count - 1);
    setCount((prevoiusValue) => prevoiusValue - 1)
  }
  function changeName() {
    setUserName("John");
  }
  function toggleVisibility() {
    setIsVisible((previousValue) => !previousValue);
  }
  function handleChangeName(event) {
    setInputName(event.target.value);
  }
  function resetInput() {
    setInputName("");
  }
  function changeProfileName() {
    setProfile({
      ...profile,
      name: "john"
    });
  }
  function addSkill() {
    setMySkills([...mySkills, "React"]);
  }
  function removeSkill(event) {
    const selectedSkill = event.target.textContent;
    setMySkills(mySkills.filter((skill) => skill !== selectedSkill));
  }
  function updateSkill() {
    setMySkills(mySkills.map((skill) => {
      if (skill === "JavaScript") {
        return "TypeScript"
      } else {
        return skill
      }
    }));
  }
  function handleSkillChange(event) {
    setNewSkill(event.target.value);
  }
  function addNewSkill() {
    if (newSkill.trim() === "") {
      alert("This field can not be empty...");
    } else {
      setMySkills([...mySkills, newSkill]);
      setNewSkill("");
    }
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
  } else {
    loginMessage = "Please Login"
  };

  //useState practice
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Sepehr");
  const [isVisible, setIsVisible] = useState(true);
  const [inputName, setInputName] = useState("");
  const [profile, setProfile] = useState({
    name: "Sepehr",
    age: 25,
    job: "Developer",
  });
  const [mySkills, setMySkills] = useState(["HTML", "CSS", "JavaScript"]);
  const [newSkill, setNewSkill] = useState("");

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
      <button onClick={(event) => { handleButtonClick(event, "First Button") }}>First Button</button>
      <br />
      <button onClick={(event) => { handleButtonClick(event, "Second Button") }}>Second Button</button>

      <br />
      <br />
      <br />

      <input type="text" value={inputName} onChange={handleChangeName} />
      <h3>input Name: {inputName}</h3>
      <button onClick={resetInput}>Reset</button>

      <br />
      <br />

      <h3>Username: {userName}</h3>
      <button onClick={changeName}>Change Name</button>

      <h3>count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>

      <br />

      {isVisible && <p>This text is visible!</p>}
      <button onClick={toggleVisibility}>Toggle the text</button>

      <Card>
        <h3>This is my first card.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, repudiandae?</p>
      </Card>
      <button onClick={() => handleClick("You clicked the first button!")}>click here</button>

      <Card>
        <h3>This is a test list of my skills.</h3>
        <ul>{skills.slice(0, 3).map((skill) => { return <li key={skill}>{skill}</li> })}</ul>
      </Card>
      <button onClick={() => handleClick("You clicked the second button!")}>click here</button>

      <Profile user={user} skills={skills} role="Manager" />

      <h3>my profile name: {profile.name}</h3>
      <button onClick={changeProfileName}>change name</button>

      <br />
      <br />

      <div>
        <input type="text" value={newSkill} onChange={handleSkillChange} />
        <button onClick={addNewSkill}>Add New Skill</button>

        <br />

        <ul>{mySkills.map(
          (skill) => <li key={skill} onDoubleClick={removeSkill}>{skill}</li>
        )}
        </ul>
        <button onClick={addSkill}>add skill</button>
        <button onClick={removeSkill}>remove skill</button>
        <button onClick={updateSkill}>update skills</button>

      </div>

      <Footer />
    </div>
  );
}

export default App;