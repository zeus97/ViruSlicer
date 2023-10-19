import { useInView } from 'react-intersection-observer'
import '../styles/Features.scss'
import firstImage from '../assets/features-img-1.svg'
import secondImage from '../assets/features-image-2.png'
import SectionHeader from '../components/SectionHeader'

function Features() {

    const [featureRef,featureInView] = useInView({
        triggerOnce:true,
    })
    const [featureTwoRef,featureTwoInView] = useInView({
        triggerOnce:true,
    })

  return (
    <section className='features-section' id='features'>
        <div className='container'>
            <div className='row features-section-1'>
                <SectionHeader
                title='Real-Time Protection'
                subtitle='OUR FEATURES'
                text='This proactive approach helps ensure that your device is protected from threats the moment they are encountered, enhancing your overall security.' />

                <div ref={featureRef} className='row mt-5'>
                    <div className='col-lg-6 col-sm-12 mb-3 features-col'>
                        <img
                        src={firstImage}
                        alt='feature img'
                        className={featureInView ? "animate__animated animate__fadeIn delay-500ms img-fluid" : "img-fluid"} />

                    </div>
                    <div className='col-lg-6 col-sm-12 features-col'>
                        <h3 className={featureInView ? "animate__animated animate__fadeIn delay-500ms": undefined}>
                            Continuous Protection
                        </h3>
                        <p className={featureInView ? "animate__animated animate__fadeIn delay-500ms": undefined}>
                            Our antivirus app offers real-time protection to keep your device safe at all times. With this feature, you can enjoy secure and worry-free browsing.
                        </p>
                        <div className={featureInView ? "animate__animated animate__fadeIn features-points delay-700ms": "features-points"}>
                            <i className="bi bi-display text-primary features-icon"></i>
                            <p>Constant Monitoring: We detect and eliminate threats in real-time, keeping your device secure at all times.</p>
                        </div>
                        <div className={featureInView ? "animate__animated animate__fadeIn features-points delay-900ms": "features-points"}>
                        <i className="bi bi-file-earmark-arrow-down text-primary features-icon"></i>
                            <p>Automatic Updates: Our database is constantly updated to defend against the latest threats.</p>
                        </div>
                        <div className={featureInView ? "animate__animated animate__fadeIn features-points delay-1s": "features-points"}>
                            <i className="bi bi-shield-shaded text-primary features-icon"></i>
                            <p>Secure Browsing: Surf the web and download files with confidence, knowing that we are protecting your device at all times.</p>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div ref={featureTwoRef} className='row features-section-2'>
                <div className='col-lg-6 col-sm-12 features-col'>
                    <h3 className={featureTwoInView ? "animate__animated animate__fadeIn delay-500ms": undefined}>
                        Quick and Effective Scanning
                    </h3>
                    <p className={featureTwoInView ? "animate__animated animate__fadeIn delay-500ms": undefined}>
                        Our quick and effective scanning is perfect for keeping your device free from malware. Scan your device in seconds and get accurate results.
                    </p>
                    <div className={featureTwoInView ? "animate__animated animate__fadeIn features-points delay-700ms": "features-points"}>
                        <i className="bi bi-file-earmark-check text-primary features-icon"></i>
                        <p>Ultra-Fast Scanning: Our scanning engine performs a comprehensive check in a matter of seconds, saving you valuable time.</p>
                    </div>
                    <div className={featureTwoInView ? "animate__animated animate__fadeIn features-points delay-900ms": "features-points"}>
                        <i className="bi bi-radar text-primary features-icon"></i>
                        <p>Precise Detection: We identify threats with precision, removing any malware or viruses from your device.</p>
                    </div>
                    <div className={featureTwoInView ? "animate__animated animate__fadeIn features-points delay-1s": "features-points"}>
                        <i className="bi bi-calendar-week text-primary features-icon"></i>
                        <p>Scan Scheduling: Set up automatic scans to keep your device safe effortlessly.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 features-col'>
                    <img
                    src={secondImage}
                    alt='feature img'
                    className={featureTwoInView ? "animate__animated animate__fadeIn delay-500ms img-fluid" : "img-fluid"} />

                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Features