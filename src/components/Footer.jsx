import React from 'react'
import { FaLinkedin,FaInstagram,FaGithub,FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const handlescroll = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior:'smooth'});
        }
    };
    return (
        <footer className='text-white py-6 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
            {/* what is container */}
            <div className='mx-auto container text-center'>
                <h4 className='text-purple-700 font-semibold text-xl'>Sivaprasad</h4>
                <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
                    {
                        [
                    {id: "about", label: "About" },
                    {id: "skills", label: "Skills" },
                    {id: "projectexperience", label: "project & experience" },
                    {id: "education", label: "Education" },
                    {id:"contact",label:"Contact"}
                    ].map((item,index)=>(
                        <button
                            key={index}
                            className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'
                            onClick={()=>handlescroll(item.id)}
                        >
                            {item.id}
                        </button>
                    ))
                    }
                </nav>
                {/* social media icons */}
                <div className='flex items-center justify-center mt-4 gap-3'>
                    {
                        [
                           { icon:<FaLinkedin/> ,link:'https://www.linkedin.com/in/siva-prasad-kada-10215129a/'},
                           { icon:<FaWhatsapp/> ,link:'https://wa.me/919346796607'},
                           { icon:<FaInstagram/> ,link:'#'},
                           { icon:<FaGithub/> ,link:'https://github.com/sivaprasad-kada'}
                        ].map((item,index)=>(
                            <a href={item.link} key={index} target='_blank' rel='noopener noreferer' className='text-xl hover:text-purple-500 transition-transform transform-scale-110'>
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
                <h4 className='text-white text-xl font-bold mt-5'>Made with ❤️ by  K.Sivaprasad</h4>
            </div>

        </footer>
    )
}
