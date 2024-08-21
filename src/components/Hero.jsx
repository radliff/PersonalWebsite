import React from 'react';
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center items-center h-96 mx-auto text-center px-4 sm:px-6 md:px-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
          Radliff Jeantinor is a
        </h1>
        <ReactTyped
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-white pl-0 sm:pl-2 md:pl-3'
          strings={['Software Engineer', 'Student', 'Learner']}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;