import React from 'react'
import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p className="Footer-text">Copyright. All rights reserved, Schitcoyn’s {year}</p>
        </div>
    )
}

export default Footer
