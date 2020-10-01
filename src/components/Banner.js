import React from 'react';
import './Banner.scss';
import Button from '@material-ui/core/Button'
import AccessTime from '@material-ui/icons/AccessTime';
import People from '@material-ui/icons/People';
import Notifications from '@material-ui/icons/Notifications';


const tagline = "Recommend your favorite things \n to your favorite people"

const bullets = [
  {
    icon: Notifications,
    text: 'excellent feature'
  },
  {
    icon: AccessTime,
    text: 'Easy to find things you saved for later'
  },
  {
    icon: People,
    text: '1-to-1 sharing for personalized content'
  },
]

const Banner = () => {
  return (
    <>
    <div className='TopBar'>
      <div className='TopBar-contents'><h1>{"NiceRocks"}</h1></div>
    </div>

    <div className='Banner'>
      <div>
        <p className='Banner-tagline'>
          {tagline}
        </p>
        <section className='Banner-keyFeatures'>
          <ul >
            {bullets.map(bullet => (
              <li>
                <bullet.icon style={{color: '#c07e0e'}}/>
                <span>{bullet.text}</span>
              </li>
            ))}
          </ul>
        </section>
        <div className='Banner-buttons'>
          <span>
            <Button variant="contained" color="secondary">iOS</Button>
            <Button variant="contained" color="secondary">Android</Button>
          </span>
        </div>
      </div>
    </div>
    </>
  )
}


export default Banner;