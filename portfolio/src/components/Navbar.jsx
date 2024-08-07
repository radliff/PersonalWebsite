import React, {useState} from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-evenly items-center h-24 max-w-[1240px] mx-auto px-2 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#1DB954]'>Radliff's Studio</h1>
        <ul className='flex'>
            <button className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 mx-5 rounded-full whitespace-nowrap">
                About Me
            </button>
            <button className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
                Projects
            </button>
            <button className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 mx-5 rounded-full whitespace-nowrap">
                Resume
            </button>
        </ul>
    </div>
  )
}

export default Navbar