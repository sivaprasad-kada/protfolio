import { useEffect, useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Navbar() {
    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projectexperience", label: "project & experience" },
        // { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" }
    ]
    const [isOpen, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const handleMenuItem = (sectionId) => {
        setActiveSection(sectionId);
        setOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // check scroll and change the background
    return (
        <>

            <nav className={`fixed top-0 w-full z-50 transition duration-300 md:px-[7vw] lg:px-[20vw] 
    ${isScrolled ? 'bg-[#050414]/80 backdrop-blur-md shadow-md' : "bg-transparent"}`}>

                <div className='text-white py-5 items-center flex justify-between'>
                    <div className='text-lg font-semibold  cursor-pointer'>
                        {/* logo     */}
                        <span className='text-[#8245ec]'>&lt;</span>
                        <span className='text-white'>Siva</span>
                        <span className='text-[#8245ec]'>/</span>
                        <span className='text-white'>Prasad</span>
                        <span className='text-[#8245ec]'>&gt;</span></div>
                    {/* desktop menuItems */}
                    <ul className='hidden md:flex text-gray-300 space-x-8'>
                        {menuItems.map((item) => (
                            <li key={item.id} className={`hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                                <button onClick={() => handleMenuItem(item.id)} className="cursor-pointer ">
                                    {item.label}
                                </button>
                            </li>
                        ))}</ul>
                    <div className="hidden md:flex space-x-4">
                        <a href="https://github.com/sivaprasad-kada" rel="noopener noreferrer" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/siva-prasad-kada-10215129a/" rel="noopener noreferrer" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                    {/*Mobile icons*/}
                    <div className="md:hidden">
                        {isOpen ? (<FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setOpen(false)} />) : (<FiMenu className="text-3xl text-[#8245ec]" onClick={() => setOpen(true)} />)}

                    </div>
                </div>
                {/* mobile MenuItem */}
                {
                    isOpen && (
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414] opacity-90 backdrop-blur-3xl backdrop-filter z-50 rounded-lg shadow-lg transform">
                            <ul className="flex-col flex items-center space-y-5 py-4 text-gray-300">
                                {
                                    menuItems.map((item) =>
                                        <li key={item.id} className={`hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                                            <button onClick={() => handleMenuItem(item.id)} className="cursor-pointer ">
                                                {item.label}
                                            </button>
                                        </li>
                                    )
                                }
                                <div className="md:hidden flex space-x-2 justify-center ">
                                    <a href="https://github.com/sivaprasad-kada" rel="noopener noreferrer" target="_blank" className="text-gray-200 hover:text-white]">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/siva-prasad-kada-10215129a/" rel="noopener noreferrer" target="_blank" className="text-gray-200 hover:text-white">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </ul>

                        </div>
                    )

                }
            </nav>
        </>
    )
}
