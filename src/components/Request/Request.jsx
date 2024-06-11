import React from 'react'
import './style.css'

function Request() {
  return (
    <div className='p-3 p-md-5'>
        <section className="container rounded-4 request-schedule p-3 p-md-5">
           <div className="row align-items-center">
            <div className="col-md-8">
            <h1 className="fs-3 fw-bold text-white">         
                Request a Schedule For <br />
                Free Consultation
            </h1>
            </div>
            <div className="col-md-4 text-start text-md-end">
                <button className="main-btn bg-light text-dark">REQUEST A SCHEDUEL</button>
            </div>
           </div>
        </section>
    </div>
  )
}

export default Request