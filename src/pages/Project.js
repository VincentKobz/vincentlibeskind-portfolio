import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import ProjectCard from '../components/ProjectCard';
import GithubStat from './GithubStat';

import Ign1 from '../assets/project/ign1.webp';
import Ign2 from '../assets/project/ign2.webp';
import Esu1 from '../assets/project/esu1.webp'
import Esu2 from '../assets/project/esu2.webp'
import Shell1 from '../assets/project/shell1.webp'
import Shell2 from '../assets/project/shell2.webp'
import Ocr1 from '../assets/project/ocr1.webp'
import Ocr2 from '../assets/project/ocr2.webp'
import C from '../assets/techno/c.svg';
import Csharp from '../assets/techno/csharp.svg';
import Git from '../assets/techno/git.png';
import Gitkraken from '../assets/techno/gitkraken.svg';
import Unity from '../assets/techno/unity.svg';
import Opengl from '../assets/techno/opengl.png';
import Python from '../assets/techno/python.svg'
import Svelte from '../assets/techno/svelte.svg'

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

    const projectCards = [
        {
            project: "Video Games E.S.U.",
            img1: Esu1,
            img2: Esu2,
            title: "SCHOOL PROJECT",
            info: "Develop a multiplayer video game with Unity.",
            technoList: [ { techno: Csharp }, {techno: Gitkraken}, {techno: Unity} ]
        },
        {
            project: "OCR",
            img1: Ocr1,
            img2: Ocr2,
            title: "SCHOOL PROJECT",
            info: "Develop an Optical Character Recognition with a neural network in C.",
            technoList: [ { techno: C }, {techno: Git} ]
        },
        {
            project: "Topographic map 3D",
            img1: Ign1,
            img2: Ign2,
            title: "SCHOOL PROJECT",
            info: "Develop a software that converts a 2d topographic map into 3D with OpenGl.",
            technoList: [ { techno: C }, {techno: Git}, {techno: Opengl} ]
        },
        {
            project: "Shell POSIX",
            img1: Shell1,
            img2: Shell2,
            title: "SCHOOL PROJECT",
            info: "Develop a POSIX shell from scratch in C.",
            technoList: [ { techno: C }, {techno: Git} ]
        },
        {
            project: "Crypto Trade Tools",
            img1: Ign1,
            img2: Ign2,
            title: "GITHUB PROJECT",
            info: "Tools to simulate and compare crypto trading bots with different strategies.",
            technoList: [ { techno: Python }, {techno: Svelte} ]
        },
    ]

    return <div className='project' id='project'>
        <div className='projectTitle'>Project.</div>
        <div className='projectContainer'>
            <div className='elementProject'>
                <ProjectCard project={projectCards[0].project} img1={projectCards[0].img1} img2={projectCards[0].img2} title={projectCards[0].title} info={projectCards[0].info} technoList={projectCards[0].technoList} />
            </div>
            <div className='elementProject'>
                <ProjectCard project={projectCards[1].project} img1={projectCards[1].img1} img2={projectCards[1].img2} title={projectCards[1].title} info={projectCards[1].info} technoList={projectCards[1].technoList} />
            </div>
            <div className='elementProject'>
                <ProjectCard project={projectCards[2].project} img1={projectCards[2].img1} img2={projectCards[2].img2} title={projectCards[2].title} info={projectCards[2].info} technoList={projectCards[2].technoList} />
            </div>
            <div className='elementProject'>
                <ProjectCard project={projectCards[3].project} img1={projectCards[3].img1} img2={projectCards[3].img2} title={projectCards[3].title} info={projectCards[3].info} technoList={projectCards[3].technoList} />
            </div>
            <div className='elementProject'>
                <ProjectCard project={projectCards[4].project} img1={projectCards[4].img1} img2={projectCards[4].img2} title={projectCards[4].title} info={projectCards[4].info} technoList={projectCards[4].technoList} />
            </div>
        </div>
        <GithubStat />
    </div>;
}

export default Project;
