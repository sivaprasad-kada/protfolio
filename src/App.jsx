import './App.css'
import Navbar from './components/Navbar'
import About from './components/About';
import Skills from './components/Skills';
import Projectexperience from './components/Projectexperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StunningBackground from './components/StunningBackground';

function App() {

  return (
    <>
      <div className='bg-[#050414] min-h-screen relative'>
        <StunningBackground />
        <div className='relative z-10 flex flex-col'>
          <div className='pt-20'></div>
          <Navbar />
          <About/>
          <Skills/>
          <Projectexperience/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
