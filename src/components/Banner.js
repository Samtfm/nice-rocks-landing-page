import React from 'react';
import './Banner.scss';
import Button from '@material-ui/core/Button'
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import People from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
const tagline = "Recommend your favorite\u00A0things to your favorite\u00A0people"

const bullets = [
  {
    icon: People,
    text: 'Share personal recommendations one\u2011on\u2011one'
  },
  {
    icon: WatchLaterIcon,
    text: 'Browse your collection in your leisure time'
  },
  {
    icon: ChatIcon,
    text: 'Use feedback on items you share to guide your next recommendation'
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
        <h1 className='Banner-tagline'>
          {tagline}
        </h1>
        <div className='Banner-keyFeatures'>
          <ul >
            {bullets.map(bullet => (
              <li key={bullet.text}>
                <bullet.icon style={{color: '#ffc229'}}/>
                <span>{bullet.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <h2 className={'Banner-coming-soon'}>{"Coming soon to iOS and Android"}</h2>
        {/* <div className='Banner-buttons'>
          <span>
            <Button size="large" variant="contained" color="secondary">iOS</Button>
            <Button size="large" variant="contained" color="secondary">Android</Button>
          </span>
        </div> */}
      </div>
    </section>
    </>
  )
}


export default Banner;