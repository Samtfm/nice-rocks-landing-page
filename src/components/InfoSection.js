import React from 'react';
import './InfoSection.scss';
import useResponsiveState from '../useResponsiveState';
const InfoSection = ({title, paragraphs, screenshot, graphic, horizontalFlip=false}) => {
  const flipped = useResponsiveState() !== 'mobile' && horizontalFlip;

  return (
    <section className='InfoSection'>
      <h1 className={'InfoSection-title'}>{title}</h1>
      <div className={'InfoSection-content'}>
        {!flipped && <img className={"InfoSection-mainImage"} src={screenshot} />}
        <div className={flipped ? 'InfoSection-info InfoSection-flipped' : 'InfoSection-info'}>
          {paragraphs.map(paragraph => (
            <div key={paragraph.title}>
              <h2>{paragraph.title}</h2>
              <p>{paragraph.body}</p>
            </div>
          ))}
          <div className="InfoSection-spacer"></div>
          <img src={graphic} />
        </div > 
        {flipped && <img className={"InfoSection-mainImage"} src={screenshot} />}
      </div>
    </section>
  )
}


export default InfoSection;