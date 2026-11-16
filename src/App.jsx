import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
//Routes
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Main App component
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        {/* login page */}
        <Route path="/Login" element={<Login />} />

        {/* home page */}
        <Route path="/" element={<Home />} />

        {/* about page */}
        <Route path="/About" element={<About />} />

        {/* users page */}
        <Route path="/users/:id" element={<User />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404-not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;