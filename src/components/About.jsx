import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import sivaprasad from '../../src/assets/sivaprasad.JPG';
import resume from '../assets/KadaSivaprasad_Resume.pdf';
export default function About() {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans pt-20 md:pt-28 lg:pt-32'>
      {/* left side */}
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-4'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight'>Hi, I am</h1>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4'>SivaPrasad Kada</h2>
          {/* skills with type writer effect */}
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>I'm a </span>
            <span className='text-[#8245ec]'>
              <Typewriter
                words={['Student 😁', 'FullStack Developer', 'Content Creator', 'UI/UX Designer', 'Problem-Solver']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About me paragraph */}
          <p className='text-gray-400 text-base sm:text-sm lg:text-base font-medium leading-relaxed max-w-lg mx-auto md:mx-0'>I'm a passionate Computer Science student aspiring to become a Full Stack Web Developer.
            Currently, I'm focused on building a strong foundation in frontend technologies. Alongside, I'm sharpening my problem-solving skills through regular coding practice. I enjoy creating clean,
            responsive, and user-friendly web interfaces. I'm constantly learning and growing, aiming to build real-world applications that make a difference.</p>
          {/* button */}
          <div className="md:flex md:flex-col md:items-start flex flex-row justify-center mt-8">
            <a
              href={resume}
              target="_blank"
              className="text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#8245ec]"
              style={{
                background: 'linear-gradient(90deg,#8245ec,#a855f7)',
                boxShadow: '0 0 10px #8245ec',
              }}
            >
              CV
            </a>
          </div>

        </div>
        {/* Right side */}
        <div className='md:w-1/2 flex justify-center items-center w-full'>
          <Tilt className='w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700/50 rounded-full flex items-center justify-center p-2' tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={1000} gyroscope={false}>
            <div className='w-full h-full rounded-full overflow-hidden shadow-[0_0_30px_rgba(130,69,236,0.6)]'>
              <img src={sivaprasad} alt='sivaprasadKada' className='w-full h-full object-cover rounded-full'></img>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  )
}
