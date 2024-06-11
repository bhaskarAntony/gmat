import React from 'react';
import './style.css';

function Header() {
  return (
    <header className='border'>
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/themes/finbuzz/assets/img/logo-dark.svg" alt="" /> */}
            <h1 className="logo fs-1">Gmat</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Mechanical Engineering</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Concept Design and Development</a></li>
                      <li><a className="dropdown-item" href="#">CAD modeling and Detailing</a></li>
                      <li><a className="dropdown-item" href="#">Engineering Analysis</a></li>
                      <li><a className="dropdown-item" href="#">Detail Engineering</a></li>
                      <li><a className="dropdown-item" href="#">Technical Documentation</a></li>
                      <li><a className="dropdown-item" href="#">Manufacturing Support</a></li>
                      <li><a className="dropdown-item" href="#">Mold / Tool Design</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Project Life Cycle (PDM/PLM)</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Technical Trainings</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Finishing School</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Staff Augmentation</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Resource Provider – Technical</a></li>
                      <li><a className="dropdown-item" href="#">Resource Provider – Subject Matter Experts</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Software Services</a></li>
                  <li><a className="dropdown-item" href="#">Embedded Systems</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="portfolioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Portfolio
                </a>
                <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
                  <li><a className="dropdown-item" href="#">Aerospace</a></li>
                  <li><a className="dropdown-item" href="#">Industrial</a></li>
                  <li><a className="dropdown-item" href="#">Automobiles</a></li>
                  <li><a className="dropdown-item" href="#">Manufacturing</a></li>
                  <li><a className="dropdown-item" href="#">Medical Devices</a></li>
                  <li><a className="dropdown-item" href="#">Semiconductors</a></li>
                  <li><a className="dropdown-item" href="#">Consumer Electronics</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="main-btn" type="submit">Contact now</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
