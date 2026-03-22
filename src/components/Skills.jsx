import {SkillsInfo} from '../constants'
import Tilt from 'react-parallax-tilt';
export default function Skills() {
  return (
    <section id='skills' className='py-20 px-[7vw] lg:px-[12vw] font-sans relative z-10'>
      {/* section title */}
      <div className='text-center mb-12'>
        <h3 className='text-2xl sm:text-3xl text-white font-bold'>SKILLS</h3>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 text-xl font-medium mt-4'>"A versatile set of technical and creative skills developed through 
        hands-on experience and continuous learning."</p>
      </div>
      <div
       className='flex flex-wrap gap-8 py-5 sm:py-10 justify-center max-w-6xl mx-auto'
      >

        {
        SkillsInfo.map((category)=>(
          <div key={category.title} className='bg-gray-900/80 backdrop-blur-md px-6 sm:px-10 py-8 mb-4 w-full sm:w-[47%] lg:w-[45%] rounded-2xl border border-white/20
          shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.4)] transition-shadow duration-300
          '>
            <h3 className='text-xl sm:text-2xl font-bold text-gray-300 text-center mb-8 tracking-wide'>{category.title}</h3>
            {/* skill items both images and names */}
            <Tilt className='' tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1} transitionSpeed={1000} gyroscope={false}>

            <div className='flex flex-wrap justify-center gap-4 w-full'>
              {category.skills.map((skill)=>(
                <div key={skill.name} className='flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/80 border border-gray-600/50 hover:border-[#8245ec] rounded-full py-2 px-4 transition-all duration-300'>
                  <img src={skill.logo} alt={skill.name} className='w-5 h-5 sm:w-6 sm:h-6 object-contain drop-shadow-md'></img>
                  <span className='text-xs sm:text-sm text-gray-200 font-semibold'>{skill.name}</span>
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
