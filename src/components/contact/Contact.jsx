import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_6atb21i', 'template_tmlkmb5', form.current, '-BkDufNYxOjfDsaa_')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>nbirdi@yahoo.com</h5>
              <a href="mailto:nbirdi@yahoo.com" target="_blank">Send a message</a>
            </article>
           
        </div>
        {/*can also add other options like messenger or whatsapp*/ }
        {/*END OF CONTACT OPTIONS*/}
        
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>
      </div>
    </section>
  )
}

export default Contact