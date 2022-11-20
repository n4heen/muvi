import React from 'react'
import requests from '../utils/requests'

export default function Nav() {
    return (
        <nav >
            <div >
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
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
