import React from 'react'
import { useInView } from 'react-intersection-observer'
import '../styles/Work.scss'

function Work() {

    const [workRef,WorkObserver] = useInView();

  return (
    <section className='work-section'>
        <div className='container'>
            <div className='work-info-box'>
                <h6 className='work-subtitle'>HOW IT WORK</h6>
                <h2 className='work-title'>How does it work?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae exercitationem, architecto explicabo, perferendis quis dolores nostrum quaerat eos esse corporis. Similique corporis reiciendis quis dignissimos sed aut sint ducimus.</p>
            </div>
            <div className='row mt-5' ref={workRef}>
                <div className='col-lg-4 col-sm-12 work-col'>
                    <div className={WorkObserver ? "work-steps animate__animated animate__zoomIn" : "work-steps"}>
                        <div className='work-icon-box'
                        style={{backgroundColor:"#c9dfff"}}>
                            <span className="material-symbols-outlined work-icon">
                                download
                            </span>
                        </div>
                        <h4>1. Download the app</h4>
                        <p>Create an account, download the app and install it</p>

                    </div>

                </div>
                <div className='col-lg-4 col-sm-12 work-col'>
                    <div className={WorkObserver ? "work-steps step-2 animate__animated animate__zoomIn" : "work-steps"}>
                        <div className='work-icon-box'
                        style={{backgroundColor:"#c9ffd0"}}>
                            <span className="material-symbols-outlined work-icon">
                                microbiology
                            </span>

                        </div>
                        <h4>2. Run a scan</h4>
                        <p>Open the app and press the Scan button to run a quick scan</p>

                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 work-col'>
                    <div className={WorkObserver ? "work-steps step-3 animate__animated animate__zoomIn" : "work-steps"}>
                        <div className='work-icon-box'
                        style={{backgroundColor:"#ffeec9"}}>
                            <span className="material-symbols-outlined work-icon">
                                health_and_safety
                            </span>

                        </div>
                        <h4>3. Stay protected</h4>
                        <p>Remove all malwares and viruses from your device</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work