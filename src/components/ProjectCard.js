import React from 'react';

import ProjectCardTechno from './ProjectCardTechno';

import '../styles/ProjectCard.css'

function ProjectCard(props) {
    const technoCards = props.technoList.map(card => <ProjectCardTechno src={card.techno} key={card.techno} />)
  return <div className='containerCard'>
      <div className='titleCard'>{props.project}</div>
      <button className='buttonCard'>
          <img className="mainImg" src={props.img1} alt="icon" />
          <img className="secondImg" src={props.img2} alt="icon" />
          <div className='buttonCardText'>{props.title}</div>
          <div className='buttonCardTextPlus'>{props.info}</div>
      </button>
      <div className='technoCard'>
          {technoCards}
      </div>
  </div>;
}

export default ProjectCard;