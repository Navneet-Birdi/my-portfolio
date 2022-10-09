import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/AVT1.jpg'
import AVT2 from '../../assets/AVT2.jpg'
import AVT3 from '../../assets/AVT3.jpg'

//using swiper for testimonilas slide show. Installed swiper
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//generating dynamically array for testimonials
const data = [
    {
        avatar:AVT1,
        name:'Nav',
        review:'Excellent'
    },
    {
        avatar:AVT2,
        name:'Nav',
        review:'Excellent'
    },
    
    {
        avatar:AVT3,
        name:'Nav',
        review:'Excellent'
    },
    
]

const Testimonials = () => {
  return (
   <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        
        <Swiper className="container testimonials__container"
            //install Swiper modules
        modules={[Pagination]} 
      spaceBetween={40}
      slidesPerView={1}
    pagination={{ clickable: true }}>
    
            {
          data.map(({avatar, name, review}, index) => {
                return(
                    <SwiperSlide key={index} className="testimonial">
                                    <div className="client__avatar">
                                        <img src={avatar} alt="profile not found"/>
                                    </div>
                                        <h5 className='client_name'>{name}</h5>
                                        <small className='client_review'>{review}</small>
                                </SwiperSlide>
)

})
}        
        </Swiper>
   </section>
  )
}

export default Testimonials