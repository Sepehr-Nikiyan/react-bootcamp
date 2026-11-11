import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main App component
function App() {
    const name = "Sepehr";

    return (
        <div>
            <Header />
            <Navbar />
            <h1>Hello, {name}!</h1>
            <p>Welcome to React.</p>
            <Footer />
        </div>
    );
}

export default App;