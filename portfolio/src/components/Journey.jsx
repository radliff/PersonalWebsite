import React from 'react'
import ufLogo from '../img/UFLogo.png'
import nsbeLogo from '../img/nsbeLogo.png'
import ppchsLogo from '../img/PPCHSlogo.png'
import ukgLogo from '../img/ukgLogo.png'
import cmuLogo from '../img/cmuLogo.png'

const Journey = () => {
    return (
      <div className='bg-black items-start py-5 px-40 mt-40 flex flex-row justify-left min-h-screen'>
        <div className='relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 grid grid-cols-2 grid-rows-2 gap-2'
          style={{ 
            width: '400px', 
            height: '400px' 
          }}
        >
          <div className='w-full h-full'>
            <img src={ppchsLogo} alt="Image 1" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-full'>
            <img src={ufLogo} alt="Image 2" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-full'>
            <img src={cmuLogo} alt="Image 3" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-full'>
            <img src={ukgLogo} alt="Image 4" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='text-lg text-slate-400 mt-32'>
          Public Playlist
        </div>
      </div>
    );
  }
  
  export default Journey;