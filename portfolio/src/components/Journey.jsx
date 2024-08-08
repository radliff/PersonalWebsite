import React from 'react'
import ufLogo from '../img/UFLogo.png'
import nsbeLogo from '../img/nsbeLogo.png'
import ppchsLogo from '../img/PPCHSlogo.png'
import ukgLogo from '../img/ukgLogo.png'
import cmuLogo from '../img/cmuLogo.png'


const Journey = () => {
    return (
      <div className='bg-black items-start  px-40 -mt-40 justify-left flex flex-col min-h-screen'>
        <div className = 'flex flex-row'>
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
            <div className='text-5xl text-white font-bold'>
              Journey
            </div>
            <div className='text-lg text-white font-bold mt-5'>
              Radliff Jeantinor ⋅ <span className='text-sm text-slate-400 mt-5'>4 songs, 10 years 5 months</span>
            </div>
          </div>
          </div>
          <div className='text-lg text-slate-400 mt-10 flex justify-between'>
           <span>#</span>
           <span className='px-40'>Title</span>  
           <span className='px-40'>Album</span>
           <span className='px-40'>Date Started</span>
           <span className='px-40'>Date Ended</span>
         </div>
         <div className='text-lg text-slate-400 mt-10 grid grid-cols-5 gap-4'>
            <span>1</span>
            <div className='flex flex-row'>
              <img src={ppchsLogo} alt="Image 1" className='w-20 h-20 object-cover -mx-5' />
              <span className='ml-10 font-bold text-white text-lg'>PPCHS</span>
            </div>
          </div>
          <div className='ml-32 mt-5 font-bold text-white text-lg flex flex-col'>
              Radliff Jeantinor
            </div>
      </div>
    );
  }
  
  export default Journey;