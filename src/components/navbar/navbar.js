import React from "react";
import './navbar.css'
import {Link,BrowserRouter as Router} from "react-router-dom";
// function to display a navbar
function Navbar(){

    return <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-white" id="nav">
            <div class="container">
            <Link class="navbar-brand" to=''>TASK APP</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to=''>Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to=''>Service</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    list
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to=''>Action</Link></li>
                    <li><Link class="dropdown-item" to=''>Another action</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link class="dropdown-item" to=''>Something else here</Link></li>
                    </ul>
                </li>
                </ul>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
    </Router>         
}

export default Navbar