import React from 'react'
import "./index.css"
const Specials = ({
  title, description, price, img
}) => {
  return (
    <article className='specials'>
      <div className="specials-content">
        <h5 className='specials-title'>{title}</h5>
        <p className='specials-desc'>{description}</p>
        <p className='specials-price'>{price}</p>
      </div>
      <div className="specials-img">
        <img src={img} alt={title}/>
      </div>
    </article>
  )
}

export default Specials