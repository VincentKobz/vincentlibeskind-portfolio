import React from 'react'

import Github from '../assets/techno/github.svg'
import Heart from '../assets/heart.svg'

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='bar' />
        <div className='vincent'>
            <h3>Made By Vincent with</h3>
            <img  src={Heart} alt='icon'/>
        </div>
        <div className='titleFooter'>
        Icon by iconmonstr.com, svgrepo.com and star icon by Andrean Prabowo on flaticon.com.
        </div>
    </div>
  )
}

export default Footer