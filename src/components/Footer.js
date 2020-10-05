import React from 'react';
import './Footer.scss';
import useResponsiveState from '../useResponsiveState';
const Footer = () => {
  const isMobile = useResponsiveState() === 'mobile'
  return (
    <>
    <div className='Footer'>
      <p>Sam Faber Manning (code, design)</p>
      <p>Maryana Pinchuk (product managment, design)</p>
    </div>
    </>
  )
}


export default Footer;