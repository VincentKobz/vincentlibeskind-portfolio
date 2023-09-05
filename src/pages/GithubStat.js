import React, { useEffect, useState } from 'react'

import Star from '../assets/star.svg';
import ScrollReveal from 'scrollreveal';

import '../styles/GithubStat.css'

function GithubStat() {
  const [values, setValues] = useState({
    stars: 0,
    nbRepo: 0,
    nbFollower: 0
  });

  let totalStars = 0;
  let totalRepo = 0;

  const getGithubStat = async () => {
    await fetch('https://api.github.com/users/VincentKobz/repos?per_page=100')
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

  const getGithubStatUser = async () => {
    await fetch('https://api.github.com/users/VincentKobz')
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
      reset: false,
      scale: 0.9,
      opacity: 0.6,
      duration: 800
    });

    sr.reveal('.github .projectTitle', {});
    sr.reveal('.github .elementReveal', {});
    getGithubStat().then(() => {
      getGithubStatUser();
    });
  }, []);
    
  return (
    <div className='github'>
      <div className='projectTitle'>GITHUB STATS</div>
      <div className='statContainer'>
        <div className='elementReveal'>
          <div className='element'>
            <div className='stats'>{values.nbRepo}</div>
            <div className='info'>repositories</div>
          </div>
        </div>
        <div className='elementReveal'>
          <div className='element'>
            <div className='stats'>{values.stars}</div>
            <img className='infoStar' src={Star} alt='icon' />
          </div>
        </div>
        <div className='elementReveal'>
          <div className='element'>
            <div className='stats'>{values.nbFollower}</div>
            <div className='info'>followers</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubStat