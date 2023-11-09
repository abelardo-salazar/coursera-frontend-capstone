import React from 'react'
import "./index.css"
const logo = "/images/logo.png"

export const Header = () => {
  return (
    <header className='container'>
        <img src={logo} alt="Little lemon logo"  />
    </header>
  )
}
