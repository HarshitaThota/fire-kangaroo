import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
    return (
        <nav  id = "nbar" className="navbar">
            <ul>
                <li><NavLink to="./" end activeclassname="active">Home</NavLink></li>
                <li><NavLink to="./AddRecipe" activeclassname="active">Add Recipe</NavLink></li>
                <li><NavLink to="./AboutUs" activeclassname="active">About Us</NavLink></li>
            </ul>
        </nav>
    );
}
export default NavBar;