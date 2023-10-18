import React from 'react'
import '../styles/Price.scss'

interface Props{
    name:string,
    price:number,
    devices:number | string,
    featureOne:string,
    featureTwo:string,
    featureThree:string,
    featureFour:string
};

function Price({name,price,devices,featureOne,featureTwo,featureThree,featureFour}:Props) {
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
                <span className="material-symbols-outlined me-1">
                    done
                </span>
                <span className='fw-semibold text-dark me-1'>{devices}</span>
                 Devices
        
            </li>
            <li className='my-3 d-flex align-items-center'>
                <span className="material-symbols-outlined me-1">
                    done
                </span>
                {featureOne}
            </li>
            <li className='my-3 d-flex align-items-center'>
                <span className="material-symbols-outlined me-1">
                    done
                </span>
                {featureTwo}
            </li>
            <li className='my-3 d-flex align-items-center'>
                <span className="material-symbols-outlined me-1">
                    done
                </span>
                {featureThree}
            </li>
            <li className='my-3 d-flex align-items-center'>
                <span className="material-symbols-outlined me-1">
                    done
                </span>
                {featureFour}
            </li>
        </ul>
        <a href='#pricing' className='btn btn-primary w-100'>Choose Plan</a>
    </div>
  )
}

export default Price