import React from 'react'

import Github from '../assets/techno/github.svg'

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='bar' />
        <div className='vincent'>
            <h3>Made By Vincent</h3>
            <a href={"https://github.com/VincentKobz"} target={"_blank"} >
                <img  src={Github} alt='icon'/>
            </a>
        </div>
        <div className='titleFooter'>
        Icon by iconmonstr.com, svgrepo.com and star icon by Andrean Prabowo on flaticon.com.
        </div>
    </div>
  )
}

export default Footer