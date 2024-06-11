import React from 'react'
import './style.css'

function Mission() {
  return (
    <div className='container-fluid p-3 p-md-5 mission'>
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src="https://img.freepik.com/free-photo/business-people-shaking-hands-greeting_53876-96074.jpg?t=st=1718045693~exp=1718049293~hmac=db5e849f6eb83fbbe4534d1af9f05db5045ac9cdf83379c69d15375ddbc6e6c9&w=740" alt="image" className="w-100 mb-3 rounded-4" />
            </div>
            <div className="col-md-6">
                <h1 className="fs-2 fw-bold">Gmat is a Bengaluru-based consultancy</h1>
                <p className="fs-6">Gmat is a Bengaluru-based consultancy, providing Mechanical Engineering, Software, Electronics, Gaming Services and Technical Trainings. Enriched diverse product knowledge, industrial experience and holistic process, we bring value to clients who expect to get the project execution done at low cost and high quality.  </p>

                <ul>
                    <li><i class="bi bi-binoculars display-6"></i> 
                        <div>
                        <span className="fs-4">Vision:</span>
                        <span className="fs-6 d-block text-secondary">provide high quality engineering and Technical services through tailored management process exceeding the expectations of customers.</span>
                        
                        
                        </div>
                    </li>
                    <li><i class="bi bi-binoculars display-6"></i> 
                        <div>
                        <span className="fs-4">Mission :</span>
                        <span className="fs-6 d-block text-secondary"> To become a path breaking leader in the sector redefining values oriented towards customer satisfaction</span>
                        
                        
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Mission