import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2 text-white'>
            <h1 className='text-3xl font-bold text-[#1DB954]'>Radliff's Studio</h1>
            <ul className='flex ml-auto'>
                <a href="#projects" className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 mx-5 rounded-full whitespace-nowrap">
                    Projects
                </a>
                <a href="#journey" className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
                    Journey
                </a>
                <a 
                    href="Jeantinor_Radliff_July_Resume_3__2024.pdf" 
                    download 
                    className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 mx-5 rounded-full whitespace-nowrap flex items-center"
                >
                    Resume <FaDownload className="ml-2" />
                </a>
                <a 
                    href="https://github.com/radliff" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 mx-5 rounded-full whitespace-nowrap flex items-center"
                >
                    <FaGithub size = {24} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/radliff-jeantinor-92853424b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    <FaLinkedin size ={24} />
                </a>
            </ul>
        </div>
    );
};

export default Navbar;