import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/AVT1.jpg'
import AVT2 from '../../assets/AVT2.jpg'

import AVT3 from '../../assets/AVT3.jpg'


const Testimonials = () => {
  return (
   <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <div className="container testimonials__container">
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVT1} alt="Avatar One"/>
                    </div>
                    <h5 className='client_name'>Nav</h5>
                    <small className='client_review'>Good Work</small>
                
            </article>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVT2} alt="Avatar One"/> </div>
                    <h5 className='client_name'>Sehaj</h5>
                    <small className='client_review'>Fantastic</small>
               
            </article>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVT3} alt="Avatar One"/></div>
                    <h5 className='client_name'>Kabir</h5>
                    <small className='client_review'>Well Designed!!</small>
                
            </article>
        </div>
   </section>
  )
}

export default Testimonials