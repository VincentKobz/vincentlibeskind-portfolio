import React, { useEffect, useState } from 'react'

import Star from '../assets/star.png';
import ScrollReveal from 'scrollreveal';

import '../styles/GithubStat.css'

function GithubStat() {
  const [values, setValues] = useState({
    stars: null,
    nbRepo: 0,
    nbFollower: 0,
    mainLaguage: null
  });

  var totalStars = 0;
  var totalRepo = 0;

  const getGithubStat = () => {
    fetch('https://api.github.com/users/VincentKobz/repos?per_page=100')
    .then((response) => {
      response.json().then(data => {
        totalStars = data.reduce((prev, curr) => {
          return prev + curr.stargazers_count
        }, 0)

        totalRepo = data.reduce((prev, curr) => {
          return prev + 1
        }, 0)

      })
    }).catch((response) => {
      if (response) throw response;
    })
  };

  const getGithubStatUser = () => {
    fetch('https://api.github.com/users/VincentKobz')
    .then((response) => {
      response.json().then(data => {

        setValues({ stars: totalStars, nbRepo: totalRepo, nbFollower: data.followers });
      })
    }).catch((response) => {
      if (response) throw response;
    })
  };

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      scale: 0.9,
      opacity: 0.6,
      duration: 800
    });

    sr.reveal('.github .projectTitle', {});
    sr.reveal('.github .element', {});
    getGithubStat();
    setTimeout(() => { getGithubStatUser(); }, 300);
  }, []);
    
  return (
    <div className='github'>
      <div className='projectTitle'>Github Stats.</div>
      <div className='statContainer'>
        <div className='element'>
          <div className='stats'>{values.nbRepo}</div>
          <div className='info'>repositories</div>
        </div>
        <div className='element'>
          <div className='stats'>{values.stars}</div>
          <img className='infoStar' src={Star} alt='icon' />
        </div>
        <div className='element'>
          <div className='stats'>{values.nbFollower}</div>
          <div className='info'>followers</div>
        </div>
      </div>
    </div>
  )
}

export default GithubStat