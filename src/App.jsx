import './App.css'
import Navbar from './components/Navbar'
import Blurbob from './Blurbob';
import About from './components/About';
import Skills from './components/Skills';
import Projectexperience from './components/projectexperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div className='bg-[#050414]'>
        <Blurbob poistion={{top:'35%',left:'20%'}} size={{width : '30%',height : '40%'}}></Blurbob>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className='relative pt-20'></div>
        <Navbar />
        <About/>
        <Skills/>
        <Projectexperience/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
