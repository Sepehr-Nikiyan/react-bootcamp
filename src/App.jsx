// Header component
function Header() {
  return (
    <div>
      <h1>My React Website</h1>
      <p>Learning React step by step</p>
    </div>
  );
}

// Main App component
function App() {
    const name = "Sepehr";

    return (
        <div>
            <Header />
            <h1>Hello, {name}!</h1>
            <p>Welcome to React.</p>
        </div>
    );
}

export default App;