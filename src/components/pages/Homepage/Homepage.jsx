import React from 'react'
import Chicago from '../../Chicago/Chicago'
import Specials from '../../Specials/Specials'
import CustomerSay from '../../CustomerSay/CustomerSay'

import "./index.css"

const img = "/images/bruchetta.jpg"

const specials = [
    { title: "Special Bruchetta", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, nostrum!", price: "$ 30.99", img: img }, { title: "Special Bruchetta", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, nostrum!", price: "$ 30.99", img: img }, { title: "Special Bruchetta", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, nostrum!", price: "$ 30.99", img: img }, { title: "Special Bruchetta", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, nostrum!", price: "$ 30.99", img: img }, { title: "Special Bruchetta", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, nostrum!", price: "$ 30.99", img: img }
]
const testimonials = [
    {
        img,
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quis.",
        customer: "John Doe"
    },
    {
        img,
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quis.",
        customer: "John Doe"
    },
    {
        img,
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quis.",
        customer: "John Doe"
    },
    {
        img,
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quis.",
        customer: "John Doe"
    }, {
        img,
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quis.",
        customer: "John Doe"
    }
]
const Homepage = () => {
    return (
        <div>
            <Chicago />
            <div className="container-child article-container">
                {specials.map((special, ind) => (
                    <Specials {...special} key={`special-${ind}-${special.title}`} />
                ))}

            </div>
            <div className='container-child article-container'>
                {testimonials.map((testimonial, ind) => (

                <CustomerSay {...testimonial} key={`testimonial-${ind}-${testimonial.customer}`} />
                ))}
            </div>
        </div>
    )
}

export default Homepage