
import './App.css'
import BrandsBar from './sections/BrandsBar'
//Sections
import Navbar from './components/Navbar'
import Analytics from './sections/Analytics'
import Contact from './sections/Contact'
import Features from './sections/Features'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Testimonial from './sections/Testimonial'
import Work from './sections/Work'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'

function App() {
  

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Work />
      <Features />
      <Analytics />
      <Testimonial />
      <BrandsBar />
      <Pricing />
      <Contact />
      <Footer />
      <LoginModal />
      <SignUpModal />
    </div>
  )
}

export default App
