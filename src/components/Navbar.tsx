import React, { useState,useEffect } from 'react'
import '../styles/Navbar.scss'

function Navbar() {

    const [navScroll, setNavScroll] = useState<boolean>(false);

    const handleScroll = ()=>{
        if(window.scrollY > 100){setNavScroll(true)}
        else{setNavScroll(false)}
    };


    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])

  return (
    <nav className={navScroll ? "navbar navbar-expand-lg navbar-custom" : "navbar navbar-expand-lg"}>
        <div className="container">
            <a className="navbar-brand" href="#home">
                ViruSlicer
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link"  href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link"  href="#testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="#contact">Contact Us</a>
                    </li>
                </ul>

                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link"  href="#">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn nav-btn" href="#">
                            Sign Up
                        </a>
                    </li>

                </ul>
                
                
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar