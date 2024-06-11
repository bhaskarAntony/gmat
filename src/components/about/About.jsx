import React from 'react'
import './style.css'

function About() {
  return (
    <section className='p-3 p-md-5 about-section'>
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src="https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg?t=st=1718042943~exp=1718046543~hmac=b1aa06dfbc69fffac5319bc971c90977fe99737d69dbe3b99966d1b16c75ed35&w=740" alt="" className="w-100 rounded-5 mb-4" />
            </div>
            <div className="col-md-6">
                {/* <p className="border fs-5 fw-bold border-2 border-danger text-danger p-2 d-inline">About Us</p> */}
                <p className="text-main fs-3">About us</p>
                <h1 className="fs-3 fw-bold">We Help Our Clients to Achieve Their Business Goal</h1>
                <p className="fs-6">Gmat is a Bengaluru-based consultancy, providing Mechanical Engineering, Software, Electronics, Gaming Services and Technical Trainings. Enriched diverse product knowledge, industrial experience and holistic process, we bring value to clients who expect to get the project execution done at low cost and high quality.  </p>

                <ul>
                    <li><i class="bi bi-check-circle-fill"></i> Mechanical Engineering</li>
                    <li><i class="bi bi-check-circle-fill"></i> Software </li>
                    <li><i class="bi bi-check-circle-fill"></i> Electronics </li>
                    <li><i class="bi bi-check-circle-fill"></i> Gaming Services</li>
                    <li><i class="bi bi-check-circle-fill"></i> Technical Trainings</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About