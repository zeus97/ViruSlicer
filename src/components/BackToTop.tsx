import React, { useState, useEffect } from 'react'

function BackToTop() {

    const [show, setShow] = useState<boolean>(false);

    const handleShow = ()=>{
        if(window.scrollY >= 1000){
            setShow(true);
        }else{setShow(false);}
    };

    useEffect(()=>{
        window.addEventListener("scroll",handleShow)

        return () => window.removeEventListener("scroll",handleShow)
    },[])


  return (
    <>
        {show &&
            <a href='#'>
                <div className='back-to-top d-flex justify-content-center align-items-center'>
                <i className="bi bi-chevron-up"></i>
                </div>
            </a>
        }
    </>
  )
}

export default BackToTop