import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll"
import ScrollReveal from 'scrollreveal';

import Firmware from '../assets/firmware.svg'
import OpenSource from '../assets/open_source.svg'
import LogoEpita from '../assets/epita.png'

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
            <Link className='buttonNav' to="project" spy={true} smooth={true} duration={500} >Projects</Link>
            <Link className='buttonNav' to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
        </div>
        <div className='shortcut'></div>

        <div className='title'>
            <img className='firmware' src={Firmware} alt='icon'
              style={{ transform: `translateY(${offsetY * 0.5}px)`}}
            />
            <img className='openSource' src={OpenSource} alt='icon'
              style={{ transform: `translateY(-${offsetY * 0.2}px)`}}
            />
            <div className='mainTitle'>Vincent Libeskind.</div>
            <div className='secondTitle'>Specialized in embedded and Linux systems.</div>
            <div className='infoMeMain'>
                <div className='infoMe'>Computer science student at </div>
                <div className='epitaLogo'>
                    <a href="https://www.epita.fr" target="_blank" >
                        <img src={LogoEpita} alt='icon' />
                    </a>
                </div>
                <div className='infoMe'>Paris, specialization GISTRE.</div>
            </div>
        </div>
      </div>
  );
}

export default Header;
