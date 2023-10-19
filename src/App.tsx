
import './App.scss'
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
//Components
import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'
import BackToTop from './components/BackToTop'

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
      <BackToTop />
    </div>
  )
}

export default App
