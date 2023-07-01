import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return ( <
        header >
        <
        h1 > Delicious Eats < /h1> <
        nav >
        <
        ul className = "nav__links" >
        <
        li >
        <
        NavLink exact to = "/"
        activeClassName = "active"
        className = "nav-link" >
        Home <
        /NavLink> < /
        li > <
        li >
        <
        NavLink to = "/about"
        activeClassName = "active"
        className = "nav-link" >
        About Us <
        /NavLink> < /
        li > <
        /ul> < /
        nav > <
        /header>
    );
}

export default NavBar;