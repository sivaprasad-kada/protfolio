import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import sivaprasad from '../../src/assets/sivaprasad.jpg';
export default function About() {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans  md:mt-24 lg:mt-32'>
      {/* left side */}
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8  md:mt-0'>
          <h1 className='text-3xl md:text-6xl sm:text-5xl font-bold text-white mb-2 leading-tight '>Hi, I am</h1>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4'>SivaPrasad Kada</h2>
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
          <p className='text-gray-400 text-base sm:text-sm lg:text-sm font-semibold'>I'm a passionate Computer Science student aspiring to become a Full Stack Web Developer.
            Currently,
            I'm focused on building a strong foundation in frontend technologies like HTML, CSS, and JavaScript. Alongside, I'm sharpening my problem-solving skills through regular coding practice. I enjoy creating clean,
            responsive, and user-friendly web interfaces.
            I'm constantly learning and growing,
            aiming to build real-world applications that make a difference.</p>
          {/* button */}
          <div className="md:flex md:flex-col md:items-start flex flex-row justify-center ">
            <a
              href='../../src/cv.html'
              
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white py-3 px-8 rounded-full mt-8 text-lg font-bold transition duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(90deg,#8245ec,#a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              Download CV
            </a>
          </div>

        </div>
          {/* Right side */}
          <div className='md:w-1/2 flex justify-center '>
          <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30 rem] md:h-[30 rem] border-4 border-purple-700 rounded-full' tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={100} scale={1.05} transitionSpeed={1000} gyroscope = {true}>
          <img src={sivaprasad} alt='sivaprasadKada' className='w-full h-full  rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'></img></Tilt>
          </div>
      </div>
    </section>
  )
}
