import React from 'react'
import '../styles/BrandsBar.scss'
//Images
import IBMLogo from '../assets/ibm.svg'
import AppleLogo from '../assets/apple.svg'
import AamazonLogo from '../assets/amazon.svg'
import GoogleLogo from '../assets/google.svg'
import TeslaLogo from '../assets/tesla.svg'
import SpotifyLogo from '../assets/spotify.svg'
import FacebookLogo from '../assets/facebook.svg'
import IntelLogo from '../assets/intel.svg'

function BrandsBar() {
  return (
    <section className='brands-section'>
      <div className='brands-bar-c container'>
          <div className='brands-box brands-box-one'></div>
          <div className='brands-box brands-box-two'></div>
        
          <div className='brands-bar d-flex align-items-center'>
              <img src={IBMLogo} alt='IBM' />
              <img src={AppleLogo} alt='Apple'/>
              <img src={AamazonLogo} alt='Aamazon'/>
              <img src={GoogleLogo} alt='Google' />
              <img src={TeslaLogo} alt='Tesla' />
              <img src={SpotifyLogo} alt='Spotify' />
              <img src={FacebookLogo} alt='Facebook' />
              <img src={IntelLogo} alt='Intel' />

              <img src={IBMLogo} alt='IBM' />
              <img src={AppleLogo} alt='Apple' />
              <img src={AamazonLogo} alt='Aamazon'/>
              <img src={GoogleLogo} alt='Google' />
              <img src={TeslaLogo} alt='Tesla' />
              <img src={SpotifyLogo} alt='Spotify' />
              <img src={FacebookLogo} alt='Facebook' />
              <img src={IntelLogo} alt='Intel' />

          </div>
          
      </div>

    </section>
  )
}

export default BrandsBar