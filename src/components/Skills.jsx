import {SkillsInfo} from '../constants'
import Tilt from 'react-parallax-tilt';
export default function Skills() {
  return (
    <section id='skills' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient '>
      {/* section title */}
      <div className='text-center mb-8'>
        <h3 className='text-2xl sm:text-3xl text-white font-bold '>SKILLS</h3>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 text-xl font-semibold mt-4'>"A versatile set of technical and creative skills developed through 
        hands-on experience and continuous learning."</p>
      </div>
      <div
       className='flex flex-wrap sm:gap-1 sm:py-10 py-5 justify-between sm:w-3xl'
      >

        {
        SkillsInfo.map((category)=>(
          <div key={category.title} className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
          '>
            <h3 className='text-xl sm:text-2xl font-semibold text-gray-400 text-center'>{category.title}</h3>
            {/* skill items both images and names */}
            <Tilt className='' tiltMaxAngleX={7} tiltMaxAngleY={7} perspective={100} scale={0.8} transitionSpeed={1000} gyroscope = {false}>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 w-full'>
              {category.skills.map((skill)=>(
                <div key={skill} className='flex items-center justify-center space-x-0.5 bg-transparent border-2 border-gray-700 rounded-3xl py-1 px-1 w-26'>
                  <img src={skill.logo} alt={skill.name} className='w-6 h-6 sm:w-8 sm:h-8'></img>
                  <span className='text-xs sm:text-xs text-gray-300 font-semibold'>{skill.name}</span>
                </div>
              ))}
            </div> </Tilt>
          </div>
        ))
       }

      </div>
    </section>
     
  )
}
