import React from 'react'
import CTA from '../CTA/CTA'

import "./index.css"

const heroImg = "/images/bruchetta.jpg"

const Chicago = () => {
  return (
    <section className='hero full-width'>
      <div className="hero-header">
        <h1>Litle Lemon</h1>
        <h2>Chicago</h2>
      </div>
      <div className="hero-content">
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <div className="hero-img">

          <img src={heroImg} alt="Brucheta dish" />
        </div>
      </div>
      <a href="#" >
        <CTA>Reserve a table</CTA>
      </a>
    </section>
  )
}

export default Chicago