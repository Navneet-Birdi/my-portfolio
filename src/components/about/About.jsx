import React from 'react'
import './about.css'
//import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    
    <div className="container about__container">
    <div className="about__me">
    <div className="about__me-image">
      <img src="{ME}" alt="About Image"/>
    </div>

    </div>

    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1 Year Working</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>3</small>
        </article>
       </div>

<p>
JavaScript Developer with knowledge in Coding and Designing. Skills in HTML, CSS, JavaScript and other languages as well. Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites.
Fascinated by computer science fundamentals and breaking down a problem piece-by-piece to find a solution. My technical aptitude in cutting-edge web technologies, combined with adept problem -solving abilities and determination, make me a strong addition to any web developer team.
Earned my certificate in full stack web development from UWA, where I honed my skills in Front end technologies and some Backend too.
</p>

<a href="#contact" className='btn btn-primary'> Let's Talk</a>

    </div>

 </div>



    
    
    
    
    </section>
  )
}

export default About