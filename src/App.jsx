import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

// Main App component
function App() {
  const name = "Sepehr";

  return (
    <div>
      <Header title="My React Website" description="Learning React step by step" />
      <Header title="My Portfolio" description="Learning React step by step" />
      <Header title="My Blog" description="Learning React step by step" />

      <Navbar />

      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>

      <Profile name="Sepehr" age={25} isDeveloper={true} />

      <Footer />
    </div>
  );
}

export default App;