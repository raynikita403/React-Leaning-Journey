import React from "react";

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-5">
      <div className="container-fluid">
        <a
          className="navbar-brand text-light fs-6 text-secondary text-uppercase text-truncate"
          href="#"
        >
          free shipping on all u.s orders over $50
        </a>

        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* Currency Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light  border-end border-secondary px-lg-3"
                href="#"
                id="currencyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-lg-2">USD</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                <li><a className="dropdown-item" href="#">CAD</a></li>
                <li><a className="dropdown-item" href="#">AUD</a></li>
                <li><a className="dropdown-item" href="#">EUR</a></li>
                <li><a className="dropdown-item" href="#">GBR</a></li>
              </ul>
            </li>

            {/* Language Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light  border-end border-secondary  px-lg-3"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-lg-2">English</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li><a className="dropdown-item" href="#">French</a></li>
                <li><a className="dropdown-item" href="#">Italian</a></li>
                <li><a className="dropdown-item" href="#">German</a></li>
                <li><a className="dropdown-item" href="#">Spanish</a></li>
              </ul>
            </li>

            {/* My Account Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light px-lg-3"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-1"></i> My Account
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="accountDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-pencil-square me-2"></i> Register
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
