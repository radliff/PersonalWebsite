import React from 'react'
import ufLogo from '../img/UFLogo.png'
import nsbeLogo from '../img/nsbeLogo.png'
import ppchsLogo from '../img/PPCHSlogo.png'
import ukgLogo from '../img/ukgLogo.png'
import cmuLogo from '../img/cmuLogo.png'


const Journey = () => {
  return (
    <div className="bg-black px-40 -mt-40 flex flex-col min-h-screen">
      <div className="flex flex-row items-start">
        <div
          className="relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 grid grid-cols-2 grid-rows-2 gap-2"
          style={{
            width: '400px',
            height: '400px',
          }}
        >
          <div className="w-full h-full">
            <img src={nsbeLogo} alt="Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full">
            <img src={ufLogo} alt="Image 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full">
            <img src={cmuLogo} alt="Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-full">
            <img src={ukgLogo} alt="Image 4" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="ml-10">
          <div className="text-lg text-slate-400">Public Playlist</div>
          <div className="text-5xl text-white font-bold">Journey</div>
          <div className="text-lg text-white font-bold mt-5">
            Radliff Jeantinor ⋅ <span className="text-sm text-slate-400">4 songs, 10 years 5 months</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-5 text-lg text-slate-400 gap-x-8">
          <span>#</span>
          <span className="text-center">Title</span>
          <span className="text-center">Skills</span>
          <span className="text-center">Date Started</span>
          <span className="text-center">Date Ended</span>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center">
          <span>1</span>
          <div className="flex justify-center">
            <img src={nsbeLogo} alt="NSBE Logo" className="w-20 h-20 object-cover" />
            <span className="text-white font-bold ml-5">National Society of Black Engineers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold">NSBE</span>
            <span className="text-lg text-slate-400 mt-2">Academic Excellence Chair</span>
          </div>
          <div className="text-center">Leadership</div>
          <div className="text-center">January 2020</div>
          <div className="text-center">May 2024</div>
        </div>
      </div>
    </div>
  );
};

  
  export default Journey;