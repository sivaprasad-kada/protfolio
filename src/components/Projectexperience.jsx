import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { projects } from '../project&experience';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Projects() {
  return (
    <section id='projectexperience' className='py-20 px-[7vw] lg:px-[12vw] font-sans relative'>
      <div className=" text-center mb-16 relative z-10">
        <h3 className="text-gray-400 text-2xl font-semibold">Project And Experience</h3>
        <div className="w-44 bg-[#8245ec] h-1 mx-auto mt-2"></div>
        <p className="text-gray-400 font-medium text-xl mt-4">"Projects That Speak. Experiences That Matter."</p>
      </div>
    
      <div className=" w-full px-4 mx-auto group relative z-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-6xl mx-auto"
        >

          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-72 sm:w-[320px]">
              <div className="bg-gray-900 backdrop-blur-md px-5 py-6 mb-10 mt-10 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] mx-auto hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.6)] transition-all duration-300">
                {/* Project title and tagline */}
                <div className="flex items-center">
                  <div className="w-[32px] h-[32px] bg-[#8254ec] text-white text-center rounded-xl p-1 font-bold text-sm mt-2 ml-2 flex items-center justify-center">
                    <img src={project.logo} className="w-full h-full object-contain"></img>
                  </div>
                  <div className="flex flex-col ml-3">
                    <h1 className="text-white font-semibold text-lg hover:text-[#8345ec] transition-colors">{project.title}</h1>
                    <h2 className="text-gray-400 text-[11px] font-semibold">{project.tagline}</h2>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-gray-300 text-xs ml-3 mr-3 mt-4 font-medium leading-relaxed">
                    {project.description}
                  </h3>
                </div>

                {/* Features */}
                <div id="features" className="flex flex-col ml-2 mt-2">
                  <h2 className="text-white text-sm mt-3 mb-1 font-semibold">Features</h2>
                  {project.features.map((feature, i) => (
                    <span key={i} className="flex items-start space-x-2 mb-1">
                      <span className="text-[#8245ec] text-xs">⭐</span>
                      <h3 className="text-gray-300 text-[11px] leading-tight">{feature}</h3>
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap ml-2 mt-4 gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#8245ec]/20 text-[#a855f7] border border-[#8245ec]/50 px-2 py-1 rounded-md text-[11px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex gap-4 mt-6 ml-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-white hover:text-[#a855f7] bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-white bg-[#8245ec] hover:bg-[#a855f7] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all shadow-[0_0_10px_rgba(130,69,236,0.4)]"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
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

