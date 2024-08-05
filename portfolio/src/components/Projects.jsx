import React from 'react'
import minesweeperFlag from '../img/minesweeperFlag.png'
import playButton from '../img/playButton.png'
import {Link} from 'react-router-dom'

const Projects = () => {
  return (
    <div className='bg-black'>
        <div className='text-white flex justify-left px-20 py-11 w-full text-3xl font-bold'>
            <h1>Projects</h1>
        </div>
        <div className='w-full items-start py-5 px-20 flex flex-col justify-left'>
            <div 
                className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 group'
                style={{ 
                    backgroundImage: `url(${minesweeperFlag})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    width: '300px', 
                    height: '300px' 
                }}
            >
                <a href='https://github.com/radliff/Minesweeper' target='_blank' rel='noopener noreferrer'>
                    <img 
                        src={playButton} 
                        alt="Play Button" 
                        className='absolute inset-0 m-auto w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        style={{ top: '95%', left: '85%', transform: 'translate(-40%, -40%)' }}
                    />
                </a>
            </div>
            <h2 className='text-2xl font-bold text-white mt-4'>Minesweeper</h2>
            <h3 className='text-lg text-slate-600 mt-4'>Artist: Radliff Jeantinor</h3> 
        </div>
    </div>
  )
}

export default Projects