import React from 'react';
import './Banner.scss';
import Button from '@material-ui/core/Button'
import AccessTime from '@material-ui/icons/AccessTime';
import People from '@material-ui/icons/People';
import Notifications from '@material-ui/icons/Notifications';


const tagline = "Recommend your favorite things \n to your favorite people"

const bullets = [
  {
    icon: People,
    text: '1-to-1 sharing for personalized content'
  },
  {
    icon: AccessTime,
    text: 'Easy to find things you saved for later'
  },
  {
    icon: Notifications,
    text: 'One more excellent feature'
  },

]

const Banner = () => {
  return (
    <>
    <div className='TopBar'>
      <div className='TopBar-contents'><span className='TopBar-brandName'>{"NiceRocks"}</span></div>
    </div>

    <section className='Banner'>
      <div>
        <p className='Banner-tagline'>
          {tagline}
        </p>
        <div className='Banner-keyFeatures'>
          <ul >
            {bullets.map(bullet => (
              <li key={bullet.text}>
                <bullet.icon style={{color: '#c07e0e'}}/>
                <span>{bullet.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='Banner-buttons'>
          <span>
            <Button variant="contained" color="secondary">iOS</Button>
            <Button variant="contained" color="secondary">Android</Button>
          </span>
        </div>
      </div>
    </section>
    </>
  )
}


export default Banner;