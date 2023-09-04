import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import ProjectCard from '../components/ProjectCard';
import GithubStat from './GithubStat';
import projectsList from '../components/ProjectsList'

import '../styles/Project.css'

function Project() {
    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            scale: 0.9,
            opacity: 0.6,
            duration: 800
        });
    
        sr.reveal('.projectTitle', {});
        sr.reveal('.projectContainer .elementProject', {});
      }, []);


    return <div className='project' id='project'>
        <div className='projectTitle'>PROJECTS</div>
        <div className='projectContainer'>
            {
                projectsList.map((project, _) => {
                    return (<ProjectCard project={project.project} img1={project.img1} img2={project.img2} title={project.title} info={project.info} technoList={project.technoList} link={project.link} github={project.github} />)
                })
            }
        </div>
        <GithubStat />
    </div>;
}

export default Project;
