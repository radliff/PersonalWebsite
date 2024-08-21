import React from 'react'
import minesweeperFlag from '../img/minesweeperFlag.png'
import playButton from '../img/playButton.png'
import spotifyLogo from '../img/spotifyLogo.png'
import pageRank from '../img/pageRank.png'
import personalWebsite from "../img/personalWebsite.png"
import { DiJava, DiMongodb, DiReact, DiPostman, DiPython } from 'react-icons/di';
import { SiApachekafka, SiTailwindcss, SiNodedotjs, SiFlask, SiCplusplus } from 'react-icons/si';

const Projects = () => {
  return (
    <div className='bg-black min-h-screen mt-64'>
      <div className='w-full text-3xl sm:text-4xl md:text-4xl font-bold text-white text-center flex flex-col md:flex-row justify-center my-8'>
        <h1>Projects</h1>
      </div>
      <div className='w-full flex flex-col items-center md:flex-row md:items-start mx-auto p-4 md:p-6 lg:p-8'>
        {/* Personal Website Card */}
        <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-2'>
          <div className='relative w-full rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${personalWebsite})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '300px' 
            }}
          >
            <a href='https://github.com/radliff/PersonalWebsite' target='_blank' rel='noopener noreferrer'>
              <img 
                src={playButton} 
                alt="Play Button" 
                className='absolute inset-0 m-auto w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-xl sm:text-2xl font-bold text-white'>Personal Website</h2>
            <h3 className='text-md sm:text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-md sm-text-lg text-slate-400 mt-2'>Tech Stack:</h4>
            <div className='flex justify-center mt-2'>
            <span className='inline-block text-neutral-50 mr-2'>
              <DiReact size={50} />
            </span>
            <span className='inline-block text-neutral-50 mr-2'>
              <SiTailwindcss size={50} />
            </span>
            <span className='inline-block text-neutral-50'>
              <SiNodedotjs size={50} />
            </span>
            </div>
          </div>
        </div>

        {/* HarmonyHub Card */}
        <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/4 p-2'>
          <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${spotifyLogo})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              height: '300px' 
            }}
          >
            <a href='https://github.com/radliff/DSAFinal' target='_blank' rel='noopener noreferrer'>
              <img 
                src={playButton} 
                alt="Play Button" 
                className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-xl sm:text-2xl font-bold text-white'>HarmonyHub</h2>
            <h3 className='text-md sm:text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
            <span className='inline-block text-neutral-50 mr-2'>
              <SiFlask size={50} />
            </span>
            <span className='inline-block text-neutral-50 mr-2'>
              <DiPython size={50} />
            </span>
            <span className='inline-block text-neutral-50'>
              <DiReact size={50} />
            </span>
          </div>
        </div>

        {/* Minesweeper Card */}
        <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${minesweeperFlag})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              width: '300px',
              height: '300px' 
            }}
          >
            <a href="https://github.com/radliff/Minesweeper" target="_blank" rel="noopener noreferrer">
              <img 
                src={playButton} 
                alt="Play Button" 
                className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-xl sm:text-2xl font-bold text-white'>Minesweeper</h2>
            <h3 className='text-md sm:text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
            <span className='inline-block text-neutral-50'>
              <SiCplusplus size={50} />
            </span>
          </div>
        </div>

        {/* PageRank Card */}
        <div className='flex flex-col items-center w-full md:w-1/2 lg:w-1/5 p-2'>
          <div className='relative w-full max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${pageRank})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              height: '300px' 
            }}
          >
            <a href="https://github.com/radliff/PageRank" target="_blank" rel="noopener noreferrer">
              <img 
                src={playButton} 
                alt="Play Button" 
                className='absolute inset-0 m-auto w-16 h-16 sm:w-24 sm:h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-xl sm:text-2xl font-bold text-white'>PageRank</h2>
            <h3 className='text-md sm:text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-md sm:text-lg text-slate-400 mt-2'>Tech Stack:</h4>
            <span className='inline-block text-neutral-50'>
              <SiCplusplus size={50} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects