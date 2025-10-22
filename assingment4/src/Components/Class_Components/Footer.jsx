import React, { Component } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane, FaPinterestP, } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-light text-light pt-5 pb-2 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 mb-3 mb-md-0 text-center text-md-start">
              <a href="#" className="text-dark me-4 text-decoration-none">
                Blogs
              </a>
              <a href="#" className="text-dark me-4 text-decoration-none">
                FAQs
              </a>
              <a href="#" className="text-dark text-decoration-none">
                Contact Us
              </a>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-dark me-3 fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-dark me-3 fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark me-3 fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark fs-5 me-3">
                <FaTelegramPlane />
              </a>
               <a href="#" className="text-dark fs-5">
                <FaPinterestP />
              </a>
            </div>
          </div>

         
          <div className=" mt-5  pt-3 text-black " style={{ fontSize: "18px" }}>
            ©2018 All Rights Reserved. Made with ❤️ by{" "}
            <span className="text-danger">Colorlib</span> & distributed by{" "}
            <span className="text-danger">ThemeWagon</span>.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
