import React from "react";
import homeLogo from "./images/homeLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg pt-lg-4">
        <div className="container-fluid">
          <a className="navbar-brand mt-2 ms-5" href="#">
            <img src={homeLogo} width="120px" alt="Main_logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-lg-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active pe-lg-5 nav-style"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-lg-5 nav-style" href="#">
                  Gallery
                </a>
              </li>
              <li>
                <a>
                  <button className="btn btn-outline-warning px-lg-3">
                    Get in touch
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
