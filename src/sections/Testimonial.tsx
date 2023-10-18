
import '../styles/Testimonial.scss'
import SectionHeader from '../components/SectionHeader'
import TestimonialCarousel from '../components/TestimonialCarousel'


function Testimonial() {
  return (
    <section className='testimonial-section' id='testimonial'>
        <div className='container'>
          <SectionHeader
          title='What Our Customers Say'
          subtitle='OUR TESTIMONIAL'
          text="We're honored to work with a diverse range of brands across various industries, and their loyalty drives us to continually improve and innovate." />
          
          <TestimonialCarousel />

        </div>
    </section>
  )
}

export default Testimonial