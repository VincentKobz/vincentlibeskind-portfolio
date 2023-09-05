import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Github from '../assets/techno/github.svg'
import Linkedin from '../assets/techno/linkedin.svg'
import Gmail from '../assets/techno/gmail.svg'
import Download from '../assets/techno/download.svg'
import Resume from '../assets/resume/resume_vincent_libeskind.pdf'

import '../styles/Contact.css'

function Contact() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      scale: 0.9,
      opacity: 0.6,
      duration: 800
    });

    sr.reveal('.contact .contactTitle', {});
    sr.reveal('.contact .contactInfo', {});
    sr.reveal('.contact .contactButton', {});
  }, []);

  return <div className='contact' id='contact'>
      <div className='contactTitle'>
          CONTACT
      </div>
      <div className='contactInfo'>
          Currently in my final year of engineering, specializing in Linux, real-time and embedded systems, I'm looking for a 5-month pre-employment internship starting in February 2024. I'm looking for a position as an embedded or Linux systems engineer.
      </div>
      <div className='contactButton'>
          <a href={'mailto:vincent.libeskind@gmail.com'} target={"_blank"} >
              <img  src={Gmail} alt='icon'/>
          </a>
          <a href={'https://www.linkedin.com/in/vincent-libeskind/'} target={"_blank"} >
              <img  src={Linkedin} alt='icon'/>
          </a>
          <a href={"https://github.com/VincentKobz"} target={"_blank"} >
              <img  src={Github} alt='icon'/>
          </a>
      </div>
      <div className={'resume'}>
          <a href={Resume} target={"_blank"} >
              Resume
              <img  src={Download} alt='icon'/>
          </a>
      </div>
  </div>;
}

export default Contact;