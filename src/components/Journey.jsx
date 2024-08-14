import React from 'react'
import ufLogo from '../img/UFLogo.png'
import nsbeLogo from '../img/nsbeLogo.png'
import ppchsLogo from '../img/PPCHSlogo.png'
import ukgLogo from '../img/ukgLogo.png'
import cmuLogo from '../img/cmuLogo.png'


const Journey = () => {
  return (
    <div className="bg-black px-40 mt-30 flex flex-col min-h-screen">
      <div className="flex flex-row items-start">
        <div
          className="relative max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 grid grid-cols-2 grid-rows-2 gap-2"
          style={{
            width: '400px',
            height: '400px',
          }}
        >
          <div className="w-full h-full">
            <img src={nsbeLogo} alt="Image 1" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="w-full h-full">
            <img src={ufLogo} alt="Image 2" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="w-full h-full">
            <img src={cmuLogo} alt="Image 3" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="w-full h-full">
            <img src={ukgLogo} alt="Image 4" className="w-full h-full object-cover transform transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
          </div>
        </div>
        <div className="ml-10">
          <div className="text-lg text-slate-400 mt-36">Public Playlist</div>
          <div className="text-6xl text-white font-bold mt-5">Journey</div>
          <div className="text-lg text-white font-bold mt-5">
            Radliff Jeantinor ⋅ <span className="text-sm text-slate-400">4 songs, 2 years 6 months</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-5 text-lg text-slate-400 gap-x-8">
          <span>#</span>
          <span className="text-left">Title</span>
          <span className="text-center">Skills</span>
          <span className="text-center">Date Started</span>
          <span className="text-center">Date Ended</span>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span>1</span>
          <div className="flex items-center">
            <img src={nsbeLogo} alt="NSBE Logo" className="w-20 h-20 object-cover mr-4" />
            <div>
              <span className="text-white font-bold">NSBE</span>
              <div className="text-lg text-slate-400 mt-2">Academic Excellence Chair</div>
            </div>
          </div>
          <div className="text-center">Leadership</div>
          <div className="text-center">May 6, 2024</div>
          <div className="text-center">Present</div>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span>2</span>
          <div className="flex items-center">
            <img src={ufLogo} alt="UF Logo" className="w-20 h-20 object-cover mr-4" />
            <div>
              <span className="text-white font-bold">UF</span>
              <div className="text-lg text-slate-400 mt-2">Student</div>
            </div>
          </div>
          <div className="text-center">Python, C++</div>
          <div className="text-center">August 22, 2022</div>
          <div className="text-center">Present</div>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span>3</span>
          <div className="flex items-center">
            <img src={cmuLogo} alt="CMU logo" className="w-20 h-20 object-cover mr-4" />
            <div>
              <span className="text-white font-bold">Carnegie Mellon</span>
              <div className="text-lg text-slate-400 mt-2">Summer Research Intern</div>
            </div>
          </div>
          <div className="text-center">Pandas, ArcGIS</div>
          <div className="text-center">May 28, 2023</div>
          <div className="text-center">July 21, 2023</div>
        </div>
        <div className="grid grid-cols-5 text-lg text-slate-400 mt-5 gap-x-8 items-center transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <span>4</span>
          <div className="flex items-center">
            <img src={ukgLogo} alt="UKG logo" className="w-20 h-20 object-cover mr-4" />
            <div>
              <span className="text-white font-bold">UKG</span>
              <div className="text-lg text-slate-400 mt-2">Software Engineering Intern</div>
            </div>
          </div>
          <div className="text-center">MongoDB, Kafka, Springboot, Ansible, Java</div>
          <div className="text-center">May 20, 2024</div>
          <div className="text-center">August 16th, 2024</div>
        </div>
      </div>
    </div>
  );
};


  
  export default Journey;