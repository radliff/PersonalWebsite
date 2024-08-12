import React from 'react'
import headshot from '../img/Headshot.jpg'
import bannerPic from '../img/bannerPic.JPG'
import bgPicRefined from '../img/bgpicRefined.jpg'
import verifiedBadge from '../img/verifiedBadge.png'

const AboutMe = () => {
  return (
    <div className='w-full h-96 bg-cover bg-center relative' style={{ backgroundImage: `url(${bgPicRefined})`, backgroundPosition: 'left 39%' }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex justify-left items-center h-full'>
        <div className='relative px-10'>
          <img 
            src={verifiedBadge} 
            alt="Verified Badge" 
            className='absolute w-9 h-8' 
            style={{ top: '-20px', left: '20px' }} 
          />
          <h2 className='text-white text-md px-5' style={{ transform: 'translateY(-15px)' }}>
            Verified Artist
          </h2>
          <h1 className='text-white text-5xl font-bold text-left'>radliff :)</h1>
        </div>
      </div>
      <div className='absolute top-0 right-10 m-4 z-20 text-white font-bold text-xl max-w-md p-4 bg-opacity-75 bg-black'>
        <p>
          Hey there! I'm Radliff Jeantinor, a student with a passion for tech. <br />
          Welcome to my Spotify-themed corner of the web, where I mix my love for code with my favorite app. <br/>
          Just like a good playlist, I believe a great website should be a blend of creativity, functionality, and personality. <br/> 
          Here, you'll find a collection of my projects, and a glimpse into my journey as a Black engineer. <br/>
          Thanks for stopping by—explore!
        </p>
      </div>
    </div>
  )
}

export default AboutMe