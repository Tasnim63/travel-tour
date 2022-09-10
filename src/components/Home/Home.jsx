import React from 'react'
import './home.scss';
import video from '../../assets/Sunset - 111204.mp4'
export default function Home() {
  return (
    <section className='home'>
      <div className="overlay">
        <video src={video} muted type="video/mp4" autoPlay loop></video>
      </div>
    </section>
  )
}
