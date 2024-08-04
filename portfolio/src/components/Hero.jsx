import React from 'react';
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='flex justify-center items-center h-96 mx-auto text-center'> 
            <h1 className='text-5xl font-bold pd text-white'>
                Radliff Jeantinor is a  
            </h1>
            <ReactTyped
                className='text-5xl font-bold text-white pl-3'
                strings={['Software Engineer', 'Student', "Learner"]}
                typeSpeed={40}
                backSpeed={40}
                loop
            />
        </div>
    </div>
        
  )
}

export default Hero