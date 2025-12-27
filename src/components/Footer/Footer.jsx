import React from 'react'
import './Footer.css'
import { data } from '../../constants'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <p>&copy; 2025 {data.brandName}. All rights reserved.</p>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </footer>
    )
}

export default Footer
