import React from 'react'
import "./index.css"

const CustomerSay = ({ img, testimonial, customer }) => {
  return (
    <article className="testimonial">
      <img src={img} alt="img" />
      <p>{testimonial}</p>
      <h5>{customer}</h5>
    </article>
  )
}

export default CustomerSay