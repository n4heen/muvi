import React from 'react'
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Router>
            <h1 className='logo'>Muvi</h1>
            <li >
                <Link to="/cart" >
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </Link>
            </li>
            </Router>
        </header>
    )
}
