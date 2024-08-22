import React from 'react'
import ufLogo from '../img/UFLogo.png'
import nsbeLogo from '../img/nsbeLogo.png'
import ukgLogo from '../img/ukgLogo.png'
import cmuLogo from '../img/cmuLogo.png'


const Journey = () => {
  return (
    <div className='w-full text-3xl sm:text-4xl md:text-4xl font-bold text-white text-center flex flex-col justify-center my-8'>
      <div className="flex flex-col items-center md:flex-row">
        <div
          className="relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 grid grid-cols-2 grid-rows-2 gap-2"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '400px',
          }}
        >
          <div className="w-full h-full">
            <img src={nsbeLogo} alt="NSBE Logo" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="w-full h-full">
            <img src={ufLogo} alt="UF Logo" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="w-full h-full">
            <img src={cmuLogo} alt="CMU logo" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="w-full h-full">
            <img src={ukgLogo} alt="UKG logo" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
        </div>
        <div className="mt-10 md:ml-10 md:mt-0 text-center md:text-left">
          <div className="text-lg text-slate-400 mt-10 md:mt-36">Public Playlist</div>
          <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mt-5">Journey</div>
          <div className="text-lg text-white font-bold mt-5">
            Radliff Jeantinor ⋅ <span className="text-sm text-slate-400">4 songs, 2 years 6 months</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-5 text-lg text-slate-400 gap-x-4">
          <span className="hidden sm:block">#</span>
          <span className="hidden sm:block col-span-1 sm:col-span-4 sm:grid sm:grid-cols-4 sm:gap-x-4">
            <span className="text-left col-span-2 sm:col-span-1 sm:pl-4">Title</span>
            <span className="hidden sm:block text-center">Skills</span>
            <span className="hidden sm:block text-center">Date Started</span>
            <span className="hidden sm:block text-center">Date Ended</span>
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 text-lg text-slate-400 mt-5 gap-x-4 sm:gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span className='hidden sm:block'>1</span>
          <div className="flex items-center col-span-2 sm:col-span-1">
            <img src={nsbeLogo} alt="NSBE Logo" className="w-16 h-16 sm:w-1/4 sm:h-auto object-cover mr-4" />
            <div>
              <span className="text-white font-bold">NSBE</span>
              <div className="text-lg text-slate-400 mt-2">Academic Excellence Chair</div>
            </div>
          </div>
          <div className="hidden sm:block text-center">Leadership</div>
          <div className="hidden sm:block text-center">May 6, 2024</div>
          <div className="hidden sm:block text-center">Present</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span className='hidden sm:block'>2</span>
          <div className="flex items-center col-span-2 sm:col-span-1">
            <img src={ufLogo} alt="UF Logo" className="w-16 h-16 sm:w-1/4 sm:h-auto object-cover mr-10" />
            <div>
              <span className="text-white font-bold">University of Florida</span>
              <div className="text-lg text-slate-400 mt-2">Student</div>
            </div>
          </div>
          <div className="hidden sm:block text-center col-span-2 sm:col-span-1">Python, C++</div>
          <div className="hidden sm:block text-center col-span-1">August 22, 2022</div>
          <div className="hidden sm:block text-center col-span-1">Present</div>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span className='hidden sm:block'>3</span>
          <div className="flex items-center">
          <img src={cmuLogo} alt="CMU logo" className="w-24 h-auto sm:w-1/4 object-cover mr-5" />
            <div>
              <span className="text-white font-bold">Carnegie Mellon</span>
              <div className="text-lg text-slate-400 mt-2 text-left whitespace-nowrap">Summer Research Intern</div>
            </div>
          </div>
          <div className="text-center hidden sm:block">Pandas, ArcGIS</div>
          <div className="text-center hidden sm:block">May 28, 2023</div>
          <div className="text-center hidden sm:block">July 21, 2023</div>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span className='hidden sm:block'>4</span>
          <div className="flex items-center">
            <img src={ukgLogo} alt="UKG logo" className="w-24 h-auto sm:w-1/4 object-cover mr-4" />
            <div>
              <span className="text-white font-bold">UKG</span>
              <div className="text-left whitespace-nowrap text-slate-400 mt-2">Software Engineering intern</div>
            </div>
          </div>
          <div className="text-center hidden sm:block">MongoDB, Kafka, Springboot, Ansible, Java</div>
          <div className="text-center hidden sm:block">May 20, 2024</div>
          <div className="text-center hidden sm:block">August 17th, 2024</div>
        </div>
      </div>
    </div>
  );
};


  
  export default Journey;