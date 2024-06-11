import React from 'react';
import './style.css'

function Hero() {
  return (
    <div className='hero text-white d-flex align-items-end p-3 p-md-5'>
        <div>
            <p className="border p-2 d-inline rounded-2 border-1">WE CREAT DIGITAL PRODUCT</p>
            <h1 className="display-5 fw-bold mt-3">Gmat is a Bengaluru-based consultancy</h1>
            <p className="fs-5">we bring value to clients who expect to get the project execution done at low cost and high quality.</p>
            <button className="main-btn rounded-pill">GET STARTED NOW</button>
        </div>
    </div>
  )
}

export default Hero;