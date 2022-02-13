import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll"
import ScrollReveal from 'scrollreveal';

import Computer from '../assets/computer.svg'
import Currency from '../assets/currency.svg'

import '../styles/Header.css'

function Header() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const sr = ScrollReveal({
      reset: false,
			duration: 1000
    });

    sr.reveal('.container .navbar', {});
    sr.reveal('.container .title', {});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className='container'>
        <div className='navbar'>
            <Link className='buttonNav' to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
            <Link className='buttonNav' to="project" spy={true} smooth={true} duration={500} >Project</Link>
        </div>
        <div className='shortcut'></div>
        
        
        <div className='title'>
            <img className='computer' src={Computer} alt='icon' 
              style={{ transform: `translateY(${offsetY * 0.5}px)`}}
            />
            <img className='currency' src={Currency} alt='icon'
              style={{ transform: `translateY(-${offsetY * 0.2}px)`}} 
            />
            <div className='mainTitle'>Hi, I'm Vincent Libeskind.</div>
            <div className='infoMe'>Computer science student at EPITA, Paris.</div>
        </div>
      </div>
  );
}

export default Header;
