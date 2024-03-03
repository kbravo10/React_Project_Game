import React from "react";
import { NavLink } from "react-router-dom";
function NavBar(){
    return(
        <div className="navbar">
            <NavLink to="/" exact className="navlink">
                Home
            </NavLink>
            <NavLink to="/game" exact className="navlink">
                START
            </NavLink>
        </div>
    )
}

export default NavBar;