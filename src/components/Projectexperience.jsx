// export default function Projectexperience() {
//   return (
//     // <section id='projectexperience'className='pb-20 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient'>
//     //   {/* section titee */}
//     //   <div className=" text-center mb-16">
//     //     <h3 className="text-gray-400 text-2xl font-semibold">Project And Experience</h3>
//     //     <div className="w-44 bg-[#8245ec] h-1 mx-auto mt-2"></div>
//     //     <p className="text-gray-400 font-semibold text-2xl mt-2">"Projects That Speak. Experiences That Matter."</p>
//     //   </div>
//     // </section>
//     <section id='projectandexperience' >
//       <div className=" text-center mb-16">
//         <h3 className="text-gray-400 text-2xl font-semibold">Project And Experience</h3>
//         <div className="w-44 bg-[#8245ec] h-1 mx-auto mt-2"></div>
//         <p className="text-gray-400 font-semibold text-2xl mt-2">"Projects That Speak. Experiences That Matter."</p>
//       </div>

//       <div className='bg-gray-900 backdrop-blur-md px-6 sm:px-5 py-8 sm:py-6 mb-10 sm:w-[30%] rounded-2xl border border-white
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] mx-auto
//           '>
//         <div className='flex items-center'>
//           <img src={reactLogo} className='w-[32px] h-[32px] rounded-xl border-white mt-4 ml-4'></img>
//           {/* title */}
//           <div className='flex flex-col ml-3'>            <h1 className='text-white font-semibold text-xl ml-2 mt-2'>Where In The World</h1>
//             <h2 className='text-white text-[10px] font-semibold'>Explore every country — one click at a time!</h2>
//           </div>
//         </div>
//         <div>
//           <h3 className='text-white text-sm ml-4 mr-4 mt-4 font-semibold hover:text-[#8254ec]'>"A dynamic ReactJS web app that displays data for every country in the world. Includes search, filter, dark mode, and individual country pages with routing.</h3></div>
//         <div id='features' className='flex flex-col ml-3'>
//           <h2 className='text-white text-lg w-full mt-3 ml-3 hover:text-[#8254ec]'>Features</h2>
//           <span className="flex  items-center space-x-1">
//             <span>⭐</span>
//             <h3 className="text-white text-xs">React routing for country pages</h3>
//           </span>
//           <span className="flex  items-center space-x-1">
//             <span>⭐</span>
//             <h3 className="text-white text-xs">Search and filter functionality</h3>
//           </span>
//           <span className="flex  items-center space-x-1">
//             <span>⭐</span>
//             <h3 className="text-white text-xs">Dark and light theme toggle</h3>
//           </span>
//           <span className="flex  items-center space-x-1">
//             <span>⭐</span>
//             <h3 className="text-white text-xs">API integration with useEffect and state management</h3>
//           </span>
//         </div>
//         {/* technologies */}
//         <div className='grid grid-cols-3 ml-2 mt-4 gap-3'>
//           <button className=' bg-[#8245ec] rounded-md text-white font-semibold shadow-purple-glow"'>Html</button>
//           <button className=' bg-[#8245ec] rounded-md text-white font-semibold shadow-purple-glow"'>CSS</button>
//           <button className=' bg-[#8245ec] rounded-md text-white font-semibold shadow-purple-glow"'>TailwindCSs</button>
//           <button className=' bg-[#8245ec] rounded-md text-white font-semibold shadow-purple-glow"'>ReactJs</button>
//         </div>
//       </div>
//     </section>
//   )
// }
// src/components/Projects.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { projects } from '../project&experience';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Projects() {
  return (
    <section id='projectexperience' className='pb-20  font-sans bg-skills-gradient'>
      <div className=" text-center mb-16">
        <h3 className="text-gray-400 text-2xl font-semibold">Project And Experience</h3>
        <div className="w-44 bg-[#8245ec] h-1 mx-auto mt-2"></div>
        <p className="text-gray-400 font-semibold text-2xl mt-2">"Projects That Speak. Experiences That Matter."</p>
      </div>
    
      <div className=" w-full px-4 bg-gray-950 mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}    // show 2 slides partially, instead of 'auto'
          spaceBetween={30}    // some gap between slides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full max-w-6xl mx-auto"
        >


          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-64 sm:w-[280px]">
              <div className="bg-gray-900 backdrop-blur-md px-5 py-6 mb-10 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] mx-auto">
                {/* Project title and tagline */}
                <div className="flex items-center">
                  <div className="w-[28px] h-[28px] bg-[#8254ec] text-white text-center rounded-xl font-bold text-sm mt-2 ml-2 flex items-center justify-center">
                    <img src={project.logo}></img>
                  </div>
                  <div className="flex flex-col ml-2">
                    <h1 className="text-white font-semibold text-lg hover:text-[#8345ec]">{project.title}</h1>
                    <h2 className="text-white text-[10px] font-semibold hover:text-[#8345ec]">{project.tagline}</h2>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-white text-xs ml-3 mr-3 mt-3 font-semibold hover:text-[#8254ec]">
                    {project.description}
                  </h3>
                </div>

                {/* Features */}
                <div id="features" className="flex flex-col ml-2">
                  <h2 className="text-white text-sm mt-3 hover:text-[#8254ec]">Features</h2>
                  {project.features.map((feature, i) => (
                    <span key={i} className="flex items-center space-x-1">
                      <span>⭐</span>
                      <h3 className="text-white text-[10px]">{feature}</h3>
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="grid grid-cols-2 ml-2 mt-3 gap-2">
                  {project.technologies.map((tech, i) => (
                    <button
                      key={i}
                      className="bg-[#8245ec] px-2 py-1 rounded-md text-white text-[11px] font-semibold"
                    >
                      {tech}
                    </button>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex gap-2 mt-4 ml-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-blue-400 underline text-xs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-green-400 underline text-xs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </section>
  );
}



