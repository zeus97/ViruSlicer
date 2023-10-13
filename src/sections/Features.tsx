import React from 'react'
import '../styles/Features.scss'
import firstImage from '../assets/features-img-1.svg'
import secondImage from '../assets/features-image-2.png'

function Features() {
  return (
    <section className='features-section' id='features'>
        <div className='container'>
            <div className='row features-section-1'>
                <div className='features-info-box'>
                    <h6 className='features-subtitle'>OUR FEATURES</h6>
                    <h2 className='features-title'>Real-Time Protection</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae exercitationem, architecto explicabo, perferendis quis dolores nostrum quaerat eos esse corporis. Similique corporis reiciendis quis dignissimos sed aut sint ducimus.</p>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-sm-12 features-col'>
                        <img
                        src={firstImage}
                        alt='feature img'
                        className='img-fluid' />

                    </div>
                    <div className='col-lg-6 col-sm-12 features-col'>
                        <h3>Continuous Protection</h3>
                        <p>Our antivirus app offers real-time protection to keep your device safe at all times. With this feature, you can enjoy secure and worry-free browsing.</p>
                        <div className='features-points'>
                            <span className="material-symbols-outlined features-icon">
                                monitoring
                            </span>
                            <p>Constant Monitoring: We detect and eliminate threats in real-time, keeping your device secure at all times.</p>
                        </div>
                        <div className='features-points'>
                            <span className="material-symbols-outlined features-icon">
                                security_update_good
                            </span>
                            <p>Automatic Updates: Our database is constantly updated to defend against the latest threats.</p>
                        </div>
                        <div className='features-points'>
                            <span className="material-symbols-outlined features-icon">
                                security
                            </span>
                            <p>Secure Browsing: Surf the web and download files with confidence, knowing that we are protecting your device at all times.</p>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className='row features-section-2'>
                <div className='col-lg-6 col-sm-12 features-col'>
                    <h3>Quick and Effective Scanning</h3>
                    <p>Our quick and effective scanning is perfect for keeping your device free from malware. Scan your device in seconds and get accurate results.</p>
                    <div className='features-points'>
                        <span className="material-symbols-outlined features-icon">
                            scan
                        </span>
                        <p>Ultra-Fast Scanning: Our scanning engine performs a comprehensive check in a matter of seconds, saving you valuable time.</p>
                    </div>
                    <div className='features-points'>
                        <span className="material-symbols-outlined features-icon">
                                radar
                        </span>
                        <p>Precise Detection: We identify threats with precision, removing any malware or viruses from your device.</p>
                    </div>
                    <div className='features-points'>
                        <span className="material-symbols-outlined features-icon">
                            calendar_month
                        </span>
                        <p>Scan Scheduling: Set up automatic scans to keep your device safe effortlessly.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 features-col'>
                    <img
                    src={secondImage}
                    alt='feature img'
                    className='img-fluid' />

                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Features