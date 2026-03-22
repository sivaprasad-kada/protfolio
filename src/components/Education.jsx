import { education } from "../../education";

export default function Education() {
  return (
    <section id="education" className="py-20 px-[7vw] lg:px-[12vw] font-sans">
      {/* heading */}
      <div className="text-center mb-20">
        <h3 className="text-gray-400 text-2xl font-bold tracking-widest uppercase">Education</h3>
        <div className="w-24 bg-[#8245ec] h-1 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-500 font-medium text-lg mt-4 max-w-2xl mx-auto">
          My academic journey and qualifications.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8245ec] via-purple-600/40 to-transparent"></div>

        <div className="space-y-12">
          {education.map((ed, index) => (
            <div key={index} className="relative flex w-full group">
              {/* Timeline Dot / Logo Over Line */}
              <div className="absolute top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-gray-900 border-2 border-[#8245ec] rounded-full flex items-center justify-center overflow-hidden z-20 shadow-[0_0_15px_rgba(130,69,236,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] transition-all duration-300">
                {ed.logo ? (
                  <img src={ed.logo} alt={ed.institution} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl md:text-2xl font-bold text-[#a855f7]">N</span>
                )}
              </div>

              {/* Content Card with alternating layout */}
              <div className={`ml-16 md:ml-0 md:w-[45%] flex flex-col ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className={`bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#8245ec]/50 group-hover:bg-gray-900/80 transition-all duration-300 relative`}>
                  
                  {/* Optional connecting pointer for desktop */}
                  <div className={`hidden md:block absolute top-[28px] w-8 h-0.5 bg-[#8245ec]/50 ${index % 2 === 0 ? '-right-8' : '-left-8'}`}></div>

                  {/* Header Information */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide group-hover:text-[#a855f7] transition-colors">{ed.institution}</h1>
                      <h2 className="text-[#a855f7] font-medium text-base md:text-lg mt-1">{ed.studiedClasses}</h2>
                    </div>
                    
                    {ed.passPercentage && (
                      <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-[#8245ec]/10 border border-[#8245ec]/20 text-gray-300 text-sm font-semibold whitespace-nowrap`}>
                        {ed.passPercentage.includes('%') || ed.passPercentage.includes('.') ? "Score: " : ""}{ed.passPercentage}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    {ed.description}
                  </p>

                  {/* Achievements */}
                  {ed.achievements && ed.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-800/80">
                      <h4 className="text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wider">Key Highlights</h4>
                      <ul className="space-y-2">
                        {ed.achievements.map((achieve, i) => (
                          <li key={i} className="flex items-start text-sm md:text-base text-gray-400">
                            <span className="text-[#8245ec] mr-3 font-bold">▹</span>
                            <span>{achieve}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
