import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'
import ConstructionBanner from './components/ConstructionBanner'

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div>
            <ConstructionBanner />
            <Navbar />
          </div>
          <Hero />
        </div>
        <div className='bg-[#050816]'>
          <Experience />
        </div>

        {/* <About />
        
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
