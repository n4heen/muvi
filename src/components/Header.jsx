import React from 'react'
import "./Header.css";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Router>
                <h1 className='header__logo'>Muvi</h1>
                <div className="header__options">
                    <MagnifyingGlassIcon className='header__search' />
                    <ShoppingCartIcon className='header__cart' />
                </div>


            </Router>
        </header>
    )
}
