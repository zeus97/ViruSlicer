
import '../styles/Analytics.scss'
import CountUp from  'react-countup'

function Analytics() {

  return (
    <section className='analytics-section'>
        <div className="container">
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <span className="material-symbols-outlined analytic-icon">
                        download
                    </span>
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
                    <span className="material-symbols-outlined analytic-icon">
                        group
                    </span>
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
                    <span className="material-symbols-outlined analytic-icon">
                        sentiment_satisfied
                    </span>
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