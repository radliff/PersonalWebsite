import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {

    return (
        <div className='flex flex-col md:flex-row justify-between items-center h-auto md:h-24 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 text-white'>
            <h1 className='text-2xl sm:text-3xl font-bold text-[#1DB954] mb-4 md:mb-0'>
                Radliff's Studio
            </h1>
            <ul className='flex flex-col md:flex-row items-center md:ml-auto space-y-4 md:space-y-0 md:space-x-5'>
                <a href="#projects" className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
                    Projects
                </a>
                <a href="#journey" className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap">
                    Journey
                </a>
                <a 
                    href="Jeantinor_Radliff_July_Resume_3__2024.pdf" 
                    download 
                    className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    Resume <FaDownload className="ml-2" />
                </a>
                <a 
                    href="https://github.com/radliff" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    <FaGithub size={24} className="mr-2" /> GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/radliff-jeantinor-92853424b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#1DB954] hover:bg-black text-white font-bold py-2 px-4 rounded-full whitespace-nowrap flex items-center"
                >
                    <FaLinkedin size={24} className="mr-2" /> LinkedIn
                </a>
            </ul>
        </div>
    );
};

export default Navbar;