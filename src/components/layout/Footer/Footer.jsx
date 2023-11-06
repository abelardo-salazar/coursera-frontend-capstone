import React from 'react'
import "./index.css"

const Footer = () => {
    return (
        <footer>
            <div className='footer-navigation'>
                <h4>Navigation</h4>
                <ul>
                    <li><a className='navlink__white' href="#">Home</a></li>
                    <li><a className='navlink__white' href="#">About</a></li>
                    <li><a className='navlink__white' href="#">Menu</a></li>
                    <li><a className='navlink__white' href="#">Reservations</a></li>
                    <li><a className='navlink__white' href="#">Order Online</a></li>
                    <li><a className='navlink__white' href="#">Login</a></li>
                </ul>
            </div>
            <hr />
            <div className='footer-contact'>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li><a className='navlink__white' href="#">Email</a></li>
                    <li><a className='navlink__white' href="#">Phone number</a></li>
                </ul>
            </div>
            <hr />
            <div className='footer-media'>
                <h4>Social Media</h4>
                <ul>
                    <li><a className='navlink__white' href="#">Instagram</a></li>
                    <li><a className='navlink__white' href="#">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;