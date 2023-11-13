import React from 'react'
import "./index.css"
import { routes } from '../../../utils/routes'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container container">

                <div className='footer-navigation'>
                    <h4>Navigation</h4>
                    <ul>
                        {routes.map(({ path, label }) => (
                            <li key={path}><a className='navlink__white' href={path}>{label}</a></li>
                        ))}

                    </ul>
                </div>
                <hr />
                <div className='footer-contact'>
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li><a className='navlink__white' href="mail:someemail@gmail.com" rel="noopener noreferrer" target="_blank">Email</a></li>
                        <li><a className='navlink__white' href="tel:00000000" rel="noopener noreferrer" target="_blank">Phone number</a></li>
                    </ul>
                </div>
                <hr />
                <div className='footer-media'>
                    <h4>Social Media</h4>
                    <ul>
                        <li><a className='navlink__white' href="www.instagram.com" rel="noopener noreferrer" target="_blank">Instagram</a></li>
                        <li><a className='navlink__white' href="www.facebook.com" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
