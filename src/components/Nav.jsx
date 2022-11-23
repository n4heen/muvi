import React from 'react'
import requests from '../utils/requests'
import { useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    
    return (
        <nav >
            <div className='container' >
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                    className='nav__title'
                        key={key}
                    // onClick={() => router.push(`/?genre=${key}`)}

                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div />
        </nav>
    )
}
