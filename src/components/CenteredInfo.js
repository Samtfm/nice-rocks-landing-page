import React from 'react';
import './CenteredInfo.scss';

const CenteredInfo = ({title, body}) => {
  console.log(body.split('\n'))
  return (
    <section className='CenteredInfo'>
      <h1 className={'CenteredInfo-title'}>{title}</h1>
      {body.split('\n').map(paragraph => (
        <p key={paragraph.slice(0, 10)}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}


export default CenteredInfo;