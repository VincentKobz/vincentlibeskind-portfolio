import React from 'react';

import '../styles/Button.css'

function Button(props) {
  return <a className='button' href={props.link} target="_blank" download>
      <div className='buttonName'>{props.title}</div>
      <img src={props.src} alt='icon' />
  </a>;
}

export default Button;
