import React from "react";
import { BiSearch, BiUser, BiCart } from "react-icons/bi"; 
import Logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4 bg-light px-lg-5 sticky-top" >
      <div className="container-fluid">
       <img src={Logo} alt="" width={200} />

      
        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
         
            <li className="nav-item">
              <a className="nav-link  px-lg-4 fw-bolder" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  px-lg-4 fw-bolder" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  px-lg-4 fw-bolder" href="#">Promotions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  px-lg-4 fw-bolder" href="#">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  px-lg-4 fw-bolder" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  px-lg-4 fw-bolder" href="#">Contact</a>
            </li>

            {/* Icons */}
            <li className="nav-item ms-3">
              <a className="nav-link fw-bolder " href="#"><BiSearch size={20} /></a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link fw-bolder" href="#"><BiUser size={20} /></a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link fw-bolder " href="#"><BiCart size={20} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
