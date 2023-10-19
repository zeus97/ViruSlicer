import { useInView } from 'react-intersection-observer'
import '../styles/Work.scss'
import SectionHeader from '../components/SectionHeader';

function Work() {

    const [workRef,WorkObserver] = useInView({
        triggerOnce:true,
    });

  return (
    <section className='work-section'>
        <div className='container'>
            <SectionHeader
            title='How does it work?'
            subtitle='HOW IT WORK'
            text='Ddownload and install the app to your device, effortlessly setting up a robust digital defense. Execute a lightning-fast scan that swiftly inspects your device for any potential threats, providing you with real-time updates on any security issues.' />
            <div className='row mt-5' ref={workRef}>
                <div className='col-lg-4 col-sm-12 work-col'>
                    <div className={WorkObserver ? "work-steps animate__animated animate__zoomIn delay-300ms" : "work-steps"}>
                        <div className='work-icon-box'
                        style={{backgroundColor:"#c9dfff"}}>
                            <i className="bi bi-download work-icon"></i>
                        </div>
                        <h4>1. Download the app</h4>
                        <p>Create an account, download the app and install it</p>

                    </div>

                </div>
                <div className='col-lg-4 col-sm-12 work-col'>
                    <div className={WorkObserver ? "work-steps delay-500ms animate__animated animate__zoomIn" : "work-steps"}>
                        <div className='work-icon-box'
                        style={{backgroundColor:"#c9ffd0"}}>
                            <i className="bi bi-virus work-icon"></i>

                        </div>
                        <h4>2. Run a scan</h4>
                        <p>Open the app and press the Scan button to run a quick scan</p>

                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 work-col'>
                    <div className={WorkObserver ? "work-steps delay-700ms animate__animated animate__zoomIn" : "work-steps"}>
                        <div className='work-icon-box'
                        style={{backgroundColor:"#ffeec9"}}>
                            <i className="bi bi-shield-plus work-icon"></i>
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