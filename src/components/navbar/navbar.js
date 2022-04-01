import React from "react";
import './navbar.css'
// function to display a navbar
function Navbar(){

    return <body>
            <nav class="navbar">
            <div class="logo">TASK APP</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li class="services">
                <a href="/">Services</a>
                <ul class="dropdown">
                    <li><a href="/">Ajouter</a></li>
                </ul>
                </li>
                <li><a href="/">Contact</a></li>
                </div>
            </ul>
            </nav>
         </body>
     
}

export default Navbar