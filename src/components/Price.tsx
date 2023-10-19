import React from 'react'
import '../styles/Price.scss'

interface Props{
    name:string,
    price:number,
    devices:number | string,
    flag:boolean,
    featureOne:string,
    featureTwo:string,
    featureThree:string,
    featureFour:string
};

function Price({name,price,devices,flag,featureOne,featureTwo,featureThree,featureFour}:Props) {
  return (
    <div className='price-box d-flex flex-column justify-content-around me-3 mb-3'>
        <div className='text-center bg-light mb-4 p-4 rounded'>
            <h5>{name}</h5>
            <h2 className='mt-3 mb-0 text-primary'>
                ${price}.00
                <span className='text-muted text-price fw-normal'>/Month</span>
            </h2>

        </div>
        <ul className='list-unstyled text-secondary mb-5 pt-2'>
            <li className='my-3 d-flex align-items-center'>
                <i className="bi bi-check me-1 price-check"></i>
                <span className='fw-semibold text-dark me-1'>{devices}</span>
                 Devices
        
            </li>
            <li className='my-3 d-flex align-items-center'>
                <i className="bi bi-check me-1 price-check"></i>
                {featureOne}
            </li>
            <li className='my-3 d-flex align-items-center'>
                <i className="bi bi-check me-1 price-check"></i>
                {featureTwo}
            </li>
            <li className='my-3 d-flex align-items-center'>
                <i className="bi bi-check me-1 price-check"></i>
                {featureThree}
            </li>
            <li className='my-3 d-flex align-items-center'>
                <i className="bi bi-check me-1 price-check"></i>
                {featureFour}
            </li>
        </ul>
        <a href='#pricing' className='btn btn-primary w-100'>Choose Plan</a>
        {flag &&
            <div className='price-flag'>
              <h6>Most popular plan</h6>  
            </div>
        }
    </div>
  )
}

export default Price