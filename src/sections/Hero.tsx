import '../styles/Hero.scss'
import heroImage from '../assets/hero-img.png'

function Hero() {

  return (
    <section className='hero-section' id='home'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 hero-col-1'>
                    <span className="material-symbols-outlined hero-icon animate__animated animate__fadeInUp ">
                        verified_user
                    </span>
                    <h1 className='animate__animated animate__fadeInUp'>
                        Welcome to <span className='text-primary'>ViruSlicer</span>
                    </h1>
                    <p className='animate__animated animate__fadeInUp'>Protect your digital life with our powerful antivirus solution.</p>
                    <div className='hero-info animate__animated animate__fadeInUp'>
                        <span className="material-symbols-outlined">
                            security
                        </span>
                        <p>Real-time virus scanning</p>
                    </div>
                    <div className='hero-info animate__animated animate__fadeInUp'>
                        <span className="material-symbols-outlined">
                            health_and_safety
                        </span>
                        <p>Malware removal and prevention</p>
                    </div>
                    <button type='button'
                     className='btn btn-primary btn-lg animate__animated animate__fadeInUp'>
                        Get Started
                        <span className="material-symbols-outlined btn-icon">
                            arrow_right_alt
                        </span>
                    </button>
                </div>
                <div className='col-lg-6 col-sm-12 hero-col-2'>
                    <img src={heroImage}
                     alt='#'
                     className='img-fluid animate__animated animate__zoomIn' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero