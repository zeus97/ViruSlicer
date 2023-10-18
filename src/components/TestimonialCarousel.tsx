import React from 'react'

import personaOne from '../assets/persona-1.jpg'
import personaTwo from '../assets/persona-2.jpg'
import personaThree from '../assets/persona-3.jpg'

function TestimonialCarousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide mt-5" data-bs-ride="carousel" data-bs-theme="dark" >
        <div className="carousel-inner" >
            <div className="carousel-item active" >
                <div className='d-flex flex-column justify-content-center align-items-center' >
                    <q className='text-center w-50 mb-3' style={{fontWeight:"bold",fontStyle:"italic"}}>
                        I recently started using ViruSlicer as my antivirus app,
                        and I couldn't be happier with the level of protection it provides. This app has been effective in keeping my devices safe from malware and viruses.
                    </q>
                    <img src={personaOne} alt="..." className='mb-3' width={150} height={150} style={{borderRadius:"50%"}} />
                    <h4 className='text-center'>-Emma Williams</h4>
                </div>
            </div>
            <div className="carousel-item">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <q className='text-center w-50 mb-3' style={{fontWeight:"bold",fontStyle:"italic"}}>
                        ViruSlicer is a game-changer when it comes to protecting your devices
                        from malicious software and viruses. I have been using this antivirus app for a while now, and I am extremely impressed with its powerful features.
                    </q>
                    <img src={personaTwo} alt="..." className='mb-3' width={150} height={150} style={{borderRadius:"50%"}} />
                    <h4 className='text-center'>-Alexander Johnson</h4>
                </div>
            </div>
            <div className="carousel-item">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <q className='text-center w-50 mb-3' style={{fontWeight:"bold",fontStyle:"italic"}}>
                        I recently started using ViruSlicer as my go-to antivirus app, and I must say,
                        I am impressed. With the increasing threat of malware and viruses, it's crucial to have a reliable antivirus software that can protect our devices. ViruSlicer does exactly that. 
                    </q>
                    <img src={personaThree} alt="..." className='mb-3' width={150} height={150} style={{borderRadius:"50%"}} />
                    <h4 className='text-center'>-Benjamin Smith</h4>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default TestimonialCarousel