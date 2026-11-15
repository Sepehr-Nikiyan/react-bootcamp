import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    console.log("location is:", location.pathname);

    const isHomePage = location.pathname === "/";
    const isAboutPage = location.pathname === "/About";

    return (
        <nav>
            <p>Home active: {isHomePage.toString()}</p>
            <p>About active: {isAboutPage.toString()}</p>

            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </nav>
    );
}

export default Navbar;