import React from 'react'
import '../styles/SectionHeader.scss'

interface Props{
    title:string,
    subtitle:string,
    text:string
};

function SectionHeader({title,subtitle,text}:Props) {
  return (
    <div className='section-header'>
        <h6 className='section-subtitle'>
            {subtitle}
        </h6>
        <h2 className='section-title'>
            {title}
        </h2>
        <p className='section-text'>
            {text}
        </p>
    </div>
  )
}

export default SectionHeader