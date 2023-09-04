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
import Readelf from '../assets/project/readelf.webp'
import ARM from '../assets/project/arm.webp'
import Mfrc522 from '../assets/project/mfrc522.webp'
import Weather1 from '../assets/project/ws1.webp'
import Weather2 from '../assets/project/ws3.webp'
import Pfee1 from '../assets/project/pfee1.webp'
import Pfee2 from '../assets/project/pfee2.webp'
import C from '../assets/techno/c.svg';
import Csharp from '../assets/techno/csharp.svg';
import Git from '../assets/techno/git.png';
import Gitkraken from '../assets/techno/gitkraken.svg';
import Unity from '../assets/techno/unity.svg';
import Opengl from '../assets/techno/opengl.png';
import Python from '../assets/techno/python.svg'
import Svelte from '../assets/techno/svelte.svg'
import VHDL from '../assets/techno/vhdl.jpg'
import Linux from '../assets/techno/linux.png'
import Kicad from '../assets/techno/kicad.png'
import Arduino from '../assets/techno/arduino.png'
import Github from '../assets/techno/github_grey.svg'
import Cplusplus from '../assets/techno/cplusplus.png'
import Thread from '../assets/techno/thread.png'
import Matter from '../assets/techno/matter.png'
import Pi from '../assets/techno/pi.png'
import Docker from '../assets/techno/docker.png'

const projectCards = [
    {
        project: "Video Games E.S.U.",
        img1: Esu1,
        img2: Esu2,
        title: "SCHOOL PROJECT",
        info: "Develop a multiplayer video game with Unity.",
        technoList: [{techno: Csharp}, {techno: Gitkraken}, {techno: Unity}, {techno: Git}],
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
        technoList: [{techno: C}, {techno: Opengl}, {techno: Git}],
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
        technoList: [{techno: Python}, {techno: Svelte}, {techno: Git}],
        link: 'https://github.com/VincentKobz/crypto-trade-tools',
        github: Github
    },
    {
        project: "Reverse Shell",
        img1: Reverse1,
        img2: Reverse2,
        title: "GITHUB PROJECT",
        info: "A simple reverse shell for Linux and Windows.",
        technoList: [{techno: C}, {techno: Git}],
        link: 'https://github.com/VincentKobz/reverse-shell',
        github: Github
    },
    {
        project: "SHA256",
        img1: Reverse1,
        img2: Reverse2,
        title: "GITHUB PROJECT",
        info: "Implementation of the SHA256 hash function.",
        technoList: [{techno: Cplusplus}, {techno: Git}],
        link: 'https://github.com/VincentKobz/sha256',
        github: Github
    },
    {
        project: "END OF STUDY PROJECT",
        img1: Pfee1,
        img2: Pfee2,
        title: "SCHOOL PROJECT",
        info: "Development of an IOT demonstrator using the Matter and Thread protocols on EFR32MG24 boards for the FOGO company.",
        technoList: [{techno: Cplusplus}, {techno: Pi}, {techno: Docker}, {techno: Thread}, {techno: Matter}, {techno: Git}],
        link: null,
        github: null
    },
    {
        project: "STM32 UART",
        img1: Reverse1,
        img2: Reverse2,
        title: "SCHOOL PROJECT",
        info: "Application that performs AES256 encryption with an STM32 via UART.",
        technoList: [{techno: C}, {techno: Git}],
        link: null,
        github: null
    },
    {
        project: "READELF",
        img1: Readelf,
        img2: Readelf,
        title: "GITHUB PROJECT",
        info: "Simple version of the ELF file analysis tool readelf.",
        technoList: [{techno: C}, {techno: Git}],
        link: 'https://github.com/VincentKobz/simple-readelf',
        github: Github
    },
    {
        project: "ARM7TDMI CPU",
        img1: ARM,
        img2: ARM,
        title: "SCHOOL PROJECT",
        info: "Development of an ARM7TDMI processor core in VHDL with a reduced instruction set.",
        technoList: [{techno: VHDL}, {techno: Git}],
        link: null,
        github: null
    },
    {
        project: "DRIVER MFRC522",
        img1: Mfrc522,
        img2: Mfrc522,
        title: "SCHOOL PROJECT",
        info: "Development of a Linux driver to communicate with a MFRC522 RFID module.",
        technoList: [{techno: C}, {techno: Linux}, {techno: Git}],
        link: null,
        github: null
    },
    {
        project: "WEATHER STATION",
        img1: Weather1,
        img2: Weather2,
        title: "GITHUB PROJECT",
        info: "Creation of a connected weather station using an ESP32, sensors and Kicad software for the PCB.",
        technoList: [{techno: C}, {techno: Arduino}, {techno: Kicad}, {techno: Git}],
        link: 'https://github.com/VincentKobz/diy-weather-station',
        github: Github
    }
]

export default projectCards;
