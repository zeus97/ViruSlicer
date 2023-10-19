
import '../styles/Analytics.scss'
import CountUp from  'react-countup'

function Analytics() {

  return (
    <section className='analytics-section'>
        <div className="container">
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <i className="bi bi-download analytic-icon"></i>
                </div>
                <div className="col-8 analytics-item-col">
                    <h3>
                        <CountUp
                        start={0}
                        end={120000} 
                        delay={0} 
                        duration={2} 
                        enableScrollSpy={true} 
                        scrollSpyOnce={true} />
                        +
                    </h3>

                    <p className='text-center'>DOWNLOADS</p>
                </div>

            </div>
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <i className="bi bi-people-fill analytic-icon"></i>
                </div>
                <div className="col-8 analytics-item-col">
                    <h3>
                        <CountUp
                        start={0}
                        end={25000} 
                        delay={0} 
                        duration={2} 
                        enableScrollSpy={true} 
                        scrollSpyOnce={true} />
                        +
                    </h3>
                    <p className='text-center'>USER CLIENTS</p>
                </div>

            </div>
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <i className="bi bi-emoji-smile-fill analytic-icon"></i>
                </div>
                <div className="col-8 analytics-item-col">
                    <h3>
                        <CountUp
                        start={0}
                        end={15} 
                        delay={0} 
                        duration={2} 
                        enableScrollSpy={true} 
                        scrollSpyOnce={true} />
                        +
                    </h3>
                    <p className='text-center'>YEARS OF EXPERIENCE</p>
                </div>

            </div>
       </div>
    </section>
  )
}

export default Analytics