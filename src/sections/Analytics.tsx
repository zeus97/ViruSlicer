import React from 'react'
import { useInView } from 'react-intersection-observer'
import '../styles/Analytics.scss'
import useCounter from '../hooks/useCounter'

function Analytics() {

    const [analyticRef,analyticObserver] = useInView({
        triggerOnce:true,
    });

    const [downloadCount, startDownloadCount] = useCounter(120000, 15, 200);
    const [usersCount, startUsersCount] = useCounter(25000, 10, 200);
    const [yearsCount, startYearsCount] = useCounter(15, 1, 500);
    
    if(analyticObserver){
        startDownloadCount();
        startUsersCount();
        startYearsCount();
    }


  return (
    <section ref={analyticRef} className='analytics-section'>
        <div className="container">
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <span className="material-symbols-outlined analytic-icon">
                        download
                    </span>
                </div>
                <div className="col-8 analytics-item-col">
                    <h3>{downloadCount}+</h3>
                    <p>DOWNLOADS</p>
                </div>

            </div>
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <span className="material-symbols-outlined analytic-icon">
                        group
                    </span>
                </div>
                <div className="col-8 analytics-item-col">
                    <h3>{usersCount}+</h3>
                    <p>USER CLIENTS</p>
                </div>

            </div>
            <div className='row analytics-item'>
                <div className="col-4 analytics-item-col">
                    <span className="material-symbols-outlined analytic-icon">
                        sentiment_satisfied
                    </span>
                </div>
                <div className="col-8 analytics-item-col">
                    <h3>{yearsCount}+</h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>

            </div>
       </div>
    </section>
  )
}

export default Analytics