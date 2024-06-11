import React from 'react'
import services from '../../data/services'
import './style.css'

function Services() {
  return (
    <div className='container-fluid p-3 p-md-5'>
        <div className="row">
            <div className="col-md-6">
                    <h2 className="fs-3 fw-bold">What Services we Provide for Our Customers Business</h2>
            </div>
            <div className="col-md-6">
                <p className="fs-5">Our agency can only be as strong as our people our team follwing agenhave run their businesses designed.</p>
            </div>
        </div>

        <div className="row mt-5">
            {
                services.map((item, index) =>(
                    <div className="col-md-4">
                        <div className="services-card mb-4">
                            <div className="card-header">
                                <img src={item.image} alt="" className="w-100 rounded" />
                            </div>
                            <div className="card-body">
                                <h1 className="fs-4 mt-4">{item.title}</h1>
                                <p className="fs-5">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services