import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div >

                    <figure className='logo' >
                        <h1 >Muvi</h1>
                    </figure>

                    {/* <div className="footer__list">
                    <Link to="/" className='footer__link'>Home</Link>
                    <span href="/" className='footer__link no-cursor'>About</span>
                    <Link to="/books" className='footer__link'></Link>
                    <Link to="/cart" className='footer__link'>Cart</Link>
                </div>  */}
                    <div className="footer__copyright">
                        Copyright &copy; 2021 Library
                    </div>
                </div>
            </div>
        </footer>
    )
}
