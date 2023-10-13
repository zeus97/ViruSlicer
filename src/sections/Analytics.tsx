import React from 'react'
import '../styles/Analytics.scss'

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
                    <h3>125000+</h3>
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
                    <h3>20000+</h3>
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
                    <h3>12+</h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>

            </div>
       </div>
    </section>
  )
}

export default Analytics