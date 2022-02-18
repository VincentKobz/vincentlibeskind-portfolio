import React from 'react'

import Logo from '../assets/logo.ico'

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='bar' />
        <div className='vincent'>
            <h3>Made By Vincent</h3>
            <img  src={Logo} alt='icon'/>
        </div>
        <div className='titleFooter'>
        Icon by iconmonstr.com, svgrepo.com and star icon by Andrean Prabowo on flaticon.com.
        </div>
    </div>
  )
}

export default Footer