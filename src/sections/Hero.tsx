import '../styles/Hero.scss'
import heroImage from '../assets/hero-img.png'

function Hero() {

  return (
    <section className='hero-section' id='home'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 hero-col-1'>
                    <i className="bi bi-shield-check hero-icon animate__animated animate__fadeInUp delay-500ms"></i>
                    <h1 className='animate__animated animate__fadeInUp delay-1s'>
                        Welcome to <span className='text-primary'>ViruSlicer</span>
                    </h1>
                    <p className='animate__animated animate__fadeInUp delay-1300ms'>Protect your digital life with our powerful antivirus solution.</p>
                    <div className='hero-info animate__animated animate__fadeInUp'>
                        <i className="bi bi-shield-shaded"></i>
                        <p>Real-time virus scanning</p>
                    </div>
                    <div className='hero-info animate__animated animate__fadeInUp delay-1600ms'>
                        <i className="bi bi-shield-plus"></i>
                        <p>Malware removal and prevention</p>
                    </div>
                    <button type='button'
                     className='btn btn-primary btn-lg animate__animated animate__fadeInUp delay-2s'>
                        Get Started
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
                <div className='col-lg-6 col-sm-12 hero-col-2'>
                    <img src={heroImage}
                     alt='#'
                     className='img-fluid animate__animated animate__zoomIn delay-500ms' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero