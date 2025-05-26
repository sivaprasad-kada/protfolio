import { education } from "../../education";
import reactlogo from '../assets/react.svg';
export default function Education() {
  return (
   <section id="education">
    {/* heading */}
    <div className=" text-center mb-16">
        <h3 className="text-gray-400 text-2xl font-semibold">EDUCATION</h3>
        <div className="w-36 bg-[#8245ec] h-1 mx-auto mt-2"></div>
        <p className="text-gray-400 font-semibold text-2xl mt-2">Learning Today, Leading Tomorrow</p>
      </div>
      <div className='flex flex-wrap items-center justify-between'>
       {
        education.map((ed)=>(
         <div className="md:w-100 w-80  bg-gray-900 backdrop-blur-md px-5 py-6 mb-10 rounded-2xl border border-white hover:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-shadow duration-300 mx-auto ">
            {/* logo and name */}
            <div className="flex">
                <img src={ed.logo}className="w-10 h-10 rounded-lg"></img>
                <h1 className="text-gray-400 text-xl font-semibold ml-2">{ed.institution}</h1>
            </div>
            <h2 className="text-gray-400  text-xs text-center font-semibold">{ed.studiedClasses}</h2>
            <h3 className="text-gray-400 font-bold text-lg">{`${ed.passPercentage ?"PassPercentage :" : ""}`}{ed.passPercentage}</h3>
            <h4 className="text-gray-400 font-semibold text-xs hover:text-[#8245ec]">{ed.description}</h4>
        </div>
        ))
       }
      </div>
   </section>
  )
}
