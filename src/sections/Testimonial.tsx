import React from 'react'
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
          text='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.' />
          
          <TestimonialCarousel />

        </div>
    </section>
  )
}

export default Testimonial