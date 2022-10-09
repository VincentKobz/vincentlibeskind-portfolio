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
import Trading1 from '../assets/project/tradingtools1.webp'
import Trading2 from '../assets/project/tradingtools2.webp'
import Reverse1 from '../assets/project/reverse_background.webp'
import Reverse2 from '../assets/project/reverse_background_2.webp'
import C from '../assets/techno/c.svg';
import Csharp from '../assets/techno/csharp.svg';
import Git from '../assets/techno/git.png';
import Gitkraken from '../assets/techno/gitkraken.svg';
import Unity from '../assets/techno/unity.svg';
import Opengl from '../assets/techno/opengl.png';
import Python from '../assets/techno/python.svg'
import Svelte from '../assets/techno/svelte.svg'
import Github from '../assets/techno/github_grey.svg'
import Cplusplus from '../assets/techno/cplusplus.png'

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
            technoList: [{techno: Csharp}, {techno: Gitkraken}, {techno: Unity}],
            link: 'https://github.com/nathan-rabet/ESU',
            github: Github
        },
        {
            project: "OCR",
            img1: Ocr1,
            img2: Ocr2,
            title: "SCHOOL PROJECT",
            info: "Develop an Optical Character Recognition with a neural network in C.",
            technoList: [{techno: C}, {techno: Git}],
            link: null,
            github: null
        },
        {
            project: "Topographic map 3D",
            img1: Ign1,
            img2: Ign2,
            title: "SCHOOL PROJECT",
            info: "Develop a software that converts a 2d topographic map into 3D with OpenGl.",
            technoList: [{techno: C}, {techno: Git}, {techno: Opengl}],
            link: null,
            github: null
        },
        {
            project: "Shell POSIX",
            img1: Shell1,
            img2: Shell2,
            title: "SCHOOL PROJECT",
            info: "Develop a POSIX shell from scratch in C.",
            technoList: [{techno: C}, {techno: Git}],
            link: null,
            github: null
        },
        {
            project: "Tiger compiler",
            img1: Reverse1,
            img2: Reverse2,
            title: "SCHOOL PROJECT",
            info: "Develop a compiler for the Tiger language.",
            technoList: [{techno: Cplusplus}, {techno: Git}],
            link: null,
            github: null,
        },
        {
            project: "Crypto Trade Tools",
            img1: Trading1,
            img2: Trading2,
            title: "GITHUB PROJECT",
            info: "Tools to simulate and compare crypto trading bots with different strategies.",
            technoList: [{techno: Python}, {techno: Svelte}],
            link: 'https://github.com/VincentKobz/crypto-trade-tools',
            github: Github
        },
        {
            project: "Reverse Shell",
            img1: Reverse1,
            img2: Reverse2,
            title: "GITHUB PROJECT",
            info: "A simple reverse shell for Linux and Windows.",
            technoList: [{techno: C}],
            link: 'https://github.com/VincentKobz/reverse-shell',
            github: Github
        }
    ]

    return <div className='project' id='project'>
        <div className='projectTitle'>Projects.</div>
        <div className='projectContainer'>
            {
                projectCards.map((project, _) => {
                    return (<ProjectCard project={project.project} img1={project.img1} img2={project.img2} title={project.title} info={project.info} technoList={project.technoList} link={project.link} github={project.github} />)
                })
            }
        </div>
        <GithubStat />
    </div>;
}

export default Project;
