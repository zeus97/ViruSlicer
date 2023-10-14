
import './App.css'
import Navbar from './components/Navbar'
import Analytics from './sections/Analytics'
import Features from './sections/Features'
import Hero from './sections/Hero'
import Testimonial from './sections/Testimonial'
import Work from './sections/Work'

function App() {
  

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Work />
      <Features />
      <Analytics />
      <Testimonial />
    </div>
  )
}

export default App
