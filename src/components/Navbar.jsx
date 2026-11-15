import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    console.log("location is:",location.pathname);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </nav>
  );
}

export default Navbar;