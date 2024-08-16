import React from 'react'
import headshot from '../img/Headshot.jpg'
import bannerPic from '../img/bannerPic.JPG'
import bgPicRefined from '../img/bgpicRefined.jpg'
import verifiedBadge from '../img/verifiedBadge.png'
import smilingPic from '../img/smilingPic.jpg'

const AboutMe = () => {
  return (
    <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto bg-cover bg-center relative h-60 md:h-70 lg:h-96 overflow-clip' 
         style={{ backgroundImage: `url(${smilingPic})`, backgroundPosition: 'left 40% top 30%' , height:'50vh'}}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex justify-left items-center h-full'>
        <div className='relative px-5 sm:px-10'>
          <img 
            src={verifiedBadge} 
            alt="Verified Badge" 
            className='absolute w-7 h-6 sm:w-9 sm:h-8' 
            style={{ top: '-15px', left: '20px' }} 
          />
          <h2 className='text-white text-sm sm:text-md px-7 transform -translate-y-3 sm:-translate-y-4'>
            Verified Artist
          </h2>
          <h1 className='text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-left'>
            Radliff :)
          </h1>
        </div>
      </div>
      <div className='absolute top-0 right-4 sm:right-10 m-2 sm:m-4 z-20 text-white text-base sm:text-xl md:text-lg lg:text-xl max-w-xs sm:max-w-xs p-2 sm:p-4 bg-opacity-75 bg-black border-2 sm:border-4 border-[#1DB954] rounded-lg'>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
          Hey there! I'm Radliff Jeantinor, a student with a passion for tech. <br />
          Welcome to my Spotify-themed corner of the web, where I mix my love for code with my favorite app. <br/>
          Just like a good playlist, I believe a great website should be a blend of creativity, functionality, and personality. <br/>
        </p>
      </div>
    </div>
  );
}


export default AboutMe