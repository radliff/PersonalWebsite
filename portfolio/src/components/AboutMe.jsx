import React from 'react'
import headshot from '../img/Headshot.jpg'
import bannerPic from '../img/bannerPic.JPG'
import bgPicRefined from '../img/bgpicRefined.jpg'

const AboutMe = () => {
  return (
    <div className='w-full h-96 bg-cover bg-center relative' style={{ backgroundImage: `url(${bgPicRefined})`, backgroundPosition: 'left 39%' }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex justify-left items-center h-full'>
        <h1 className='text-white text-5xl font-bold text-lef px-20'>radliff :)</h1>
      </div>
      <div className='absolute top-0 right-0 m-4 z-20 text-white font-bold text-lg'>
      Hey there! I'm Radliff Jeantinor, a student at the University of Florida with a passion for all things tech. <br />
      Welcome to my Spotify-themed corner of the web, where I mix my love for code with my favorite tunes. <br/>

      Just like a good playlist, I believe a great website should be a blend of creativity, functionality, and personality. <br/> 
      Here, you'll find a collection of my projects, and a glimpse into my journey as a Black engineer. <br/>

      Thanks for stopping by—explore!

      </div>
    </div>
  )
}

export default AboutMe