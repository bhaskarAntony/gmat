import React from 'react'
import './style.css'

function Subscribe() {
  return (
    <div className='subscribe text-light p-3 p-md-5'>
            <div className="row">
                <div className="col-md-6">
                <h1 className="fs-2">Like our service? Subscribe us</h1>
                <p className="fs-4">sign up to get new exclusive offers from our latest solutions</p>
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder='type your Email Address' className='mt-3 mt-md-0'/>
                    <button className="btn btn-light w-100 rounded-pill p-3">SUBSCRIBE</button>
                </div>
            </div>
    </div>
  )
}

export default Subscribe