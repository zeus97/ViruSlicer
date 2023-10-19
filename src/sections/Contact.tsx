import '../styles/Contact.scss'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section className='contact-section' id='contact'>
        <div className='container'>
            <SectionHeader
            title='Get in Touch'
            subtitle='CONTACT US'
            text='' />
            <div className="row mt-3">
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className='mb-3'>
                        <h2 className='mb-5'>👋 Say Hello!</h2>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                                <i className="bi bi-envelope-at text-primary contact-icon"></i>
                                <h4>Email</h4>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='d-flex align-items-center'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    viruslicer-contact@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                                <i className="bi bi-telephone text-primary contact-icon"></i>
                                <h4>Phone</h4>
                            </div>
                            <div className='d-flex align-items-center'>
                                
                                <p className='d-flex align-items-center'>
                                    <i className="bi bi-arrow-right me-2"></i>
                                    (+01) 1234 5678 44
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex align-items-center'>
                                <i className="bi bi-geo-alt text-primary contact-icon"></i>
                                <h4>Address</h4>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h5 className='d-flex align-items-center'>
                                    New York Office
                                </h5>
                            </div>
                            <p>
                                <i className="bi bi-arrow-right me-2"></i>
                                3345 Maple Street, Eros Avenue, CA 44017
                            </p>
                        </div>

                    </div>
                    
                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact