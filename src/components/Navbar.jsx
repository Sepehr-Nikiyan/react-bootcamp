import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => {return isActive ? "Active" : ""}}>Home</NavLink>
            <NavLink to="/About" className={({isActive})=> {return isActive ? "Active" : ""}}>About</NavLink>
        </nav>
    );
}

export default Navbar;