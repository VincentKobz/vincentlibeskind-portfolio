import React from 'react';

import '../styles/ProjectCardTechno.css'

function ProjectCardTechno(props) {
  return <div className='technoCard'>
        <img  src={props.src} alt='icon'/>
      </div>
}

export default ProjectCardTechno;
