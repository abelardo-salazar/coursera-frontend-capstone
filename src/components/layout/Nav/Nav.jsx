import React from 'react'
import "./index.css"
import { routes } from '../../../utils/routes'

export const Nav = () => {
  return (
    <nav >
      <div className='topbar container'>
        <ul>
          {routes.map(({label, path}) => (
            <li key={path}><a className='navlink__white' href={path}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
