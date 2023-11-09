import React from 'react'
import "./index.css"

export const Nav = () => {
  return (
    <nav >
      <div className='topbar container'>
        <ul>
          <li><a className='navlink__white' href="#">Home</a></li>
          <li><a className='navlink__white' href="#">About</a></li>
          <li><a className='navlink__white' href="#">Menu</a></li>
          <li><a className='navlink__white' href="#">Reservations</a></li>
          <li><a className='navlink__white' href="#">Order Online</a></li>
          <li><a className='navlink__white' href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}
