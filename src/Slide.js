import React from 'react'
import primebanner from './Asset/Prime banner.jpg';
import './Slide.css';


 const Slide = () => {
  return (
    <div className='slide'>
       <strong>Prime Video: Recommended for you</strong>
        <span>Ponniyin Selvan Part 1</span>
       <div className='primebanner'>
        <img className='banner' src={primebanner} alt="" />
       </div>
     




    </div>
  )
}


export default Slide;