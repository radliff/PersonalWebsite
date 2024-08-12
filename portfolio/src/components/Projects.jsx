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
      <div className='w-full text-3xl font-bold text-white px-40 py-5 text-center'>
        <h1>Projects</h1>
      </div>
      <div className='w-full items-start py-5 px-40 flex flex-row justify-left'>
        {/* Personal Website Card */}
        <div className='flex flex-col items-center'>
          <div className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${personalWebsite})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              width: '400px', 
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
            <h2 className='text-2xl font-bold text-white'>Personal Website</h2>
            <h3 className='text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-lg text-slate-400 mt-2'>Tech Stack:</h4>
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

        {/* HarmonyHub Card */}
        <div className='flex flex-col items-center ml-10'>
          <div className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${spotifyLogo})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              width: '400px', 
              height: '300px' 
            }}
          >
            <a href='https://github.com/radliff/DSAFinal' target='_blank' rel='noopener noreferrer'>
              <img 
                src={playButton} 
                alt="Play Button" 
                className='absolute inset-0 m-auto w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-2xl font-bold text-white'>HarmonyHub</h2>
            <h3 className='text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-lg text-slate-400 mt-2'>Tech Stack:</h4>
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
        <div className='flex flex-col items-center ml-10'>
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
                className='absolute inset-0 m-auto w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-2xl font-bold text-white'>Minesweeper</h2>
            <h3 className='text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-lg text-slate-400 mt-2'>Tech Stack:</h4>
            <span className='inline-block text-neutral-50'>
              <SiCplusplus size={50} />
            </span>
          </div>
        </div>

        {/* PageRank Card */}
        <div className='flex flex-col items-center ml-20'>
          <div className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
            style={{ 
              backgroundImage: `url(${pageRank})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              width: '300px', 
              height: '300px' 
            }}
          >
            <a href="https://github.com/radliff/PageRank" target="_blank" rel="noopener noreferrer">
              <img 
                src={playButton} 
                alt="Play Button" 
                className='absolute inset-0 m-auto w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
              />
            </a>
          </div>
          <div className='text-center mt-4'>
            <h2 className='text-2xl font-bold text-white'>PageRank</h2>
            <h3 className='text-lg text-slate-400 mt-2'>Artist: Radliff Jeantinor</h3> 
            <h4 className='text-lg text-slate-400 mt-2'>Tech Stack:</h4>
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