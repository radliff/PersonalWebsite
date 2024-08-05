import React from 'react'
import headshot from '../img/Headshot.jpg'

const AboutMe = () => {
    return (
        <div className='w-full items-center bg-black py-16 px-4 flex justify-center'>
          <div className='max-w-lg rounded-2xl overflow-hidden shadow-lg bg-black p-6 border-2 border-[#1DB954]'>
            <h2 className='text-2xl font-bold mb-4 text-white flex justify-center'>About Me</h2>
            <p className='text-white text-base'>
            My name is Radliff Jeantinor, and I am a second-year student majoring in Mathematics and Computer Science at the University of Florida. I currently serve as the Academic Excellence Chair for the UF Chapter of NSBE.
            My passion for computer science stems from a deep love of math and algorithms.  These studies, combined with my practical experience, have equipped me with a solid foundation to excel in the field of software engineering.
            In my free time, I like to do crossword puzzles, and a word game is the best way to get my attention. I also love basketball (go Heat!) and anything to do with sports.
            </p>
          <div className="flex items-center justify-center mt-4"> 
            <img src={headshot} className='text-white w-24 h-24 rounded-full' alt='Headshot of Radliff Jeantinor'/>
          </div>
        </div>
      </div>
      )
    }

export default AboutMe