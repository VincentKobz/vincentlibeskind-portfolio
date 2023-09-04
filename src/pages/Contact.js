import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Button from '../components/Button';
import Github from '../assets/techno/github.svg'
import Linkedin from '../assets/techno/linkedin.svg'
import Gmail from '../assets/techno/gmail.svg'
import Download from '../assets/techno/download.svg'
import Resume from '../assets/resume/resume_vincent_libeskind.pdf'

import '../styles/Contact.css'

function Contact() {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
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
        <Button title="Github" src={Github} link='https://github.com/VincentKobz' />
        <Button title="LinkedIn" src={Linkedin} link='https://www.linkedin.com/in/vincent-libeskind/' />
        <Button title="Mail" src={Gmail} link='mailto:vincent.libeskind@gmail.com'/>
        <Button title="Resume" src={Download} link={Resume} />
      </div>
  </div>;
}

export default Contact;