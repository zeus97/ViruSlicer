import React from 'react'
import '../styles/Testimonial.scss'
import SectionHeader from '../components/SectionHeader'
import TestimonialCarousel from '../components/TestimonialCarousel'
import BrandsBar from '../components/BrandsBar'

function Testimonial() {
  return (
    <section className='testimonial-section' id='testimonial'>
        <div className='container'>
          <SectionHeader
          title='What Our Customers Say'
          subtitle='OUR TESTIMONIAL'
          text="We're honored to work with a diverse range of brands across various industries, and their loyalty drives us to continually improve and innovate." />
          
          <TestimonialCarousel />

          <BrandsBar />

        </div>
    </section>
  )
}

export default Testimonial