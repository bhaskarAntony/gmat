import React from 'react'
import './style.css'

function Contact() {
  return (
    <div className='contact container-fluid p-3 p-md-5 text-white'>
        <div className="row">
            <div className="col-md-6">
                <p className="fs-6 fw-bold p-2 border border-2 rounded d-inline">CONTACT US</p>
                <h1 className="fs-1 fw-bold mt-3">Feel Free to Contact us for Any Consult Reason</h1>
                <p className="fs-5">Our agency can only be as strong as our peopleagenhave their businesses Duis aute irure dolorreprehDuis auteirur olor in reprehenderit in voluptate.</p>

                <ul className="mt-4">
                    <li>
                    <i class="bi bi-geo-alt-fill"></i>
                    <div>
                        <span className="d-block">Location:</span>
                        <span className="fs-6">12/A, Pk House New York, US</span>
                    </div>
                    </li>
                    <li>
                    <i class="bi bi-telephone-fill"></i>
                    <div>
                        <span className="d-block">Call Us:</span>
                        <span className="fs-6">+91003873873</span>
                    </div>
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <div className="card border-0 p-3 p-md-5 mt-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group mt-3">
                            <input type="text" placeholder='Enter your name' className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="form-group mt-3">
                            <input type="text" placeholder='Enter your name' className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="form-group mt-3">
                            <input type="text" placeholder='Enter your name' className="form-control" />
                            </div>
                        </div>
                        <div className="col-12">
                        <div className="form-group mt-3">
                           <select name="" id="" className="form-select">
                            <option value="option1">Option1</option>
                            <option value="option1">Option1</option>
                            <option value="option1">Option1</option>
                            <option value="option1">Option1</option>
                           </select>
                            </div>
                        </div>

                        <div className="col-12">
                        <div className="form-group mt-3">
                        <textarea name="" cols={10} rows={5} id=""  placeholder="comment" className="form-control"></textarea>
                            </div>
                        </div>
                        <button className="main-btn mt-4">SUBMIT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
