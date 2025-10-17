import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer-section text-center py-5">
        
        {/* Social icons */}
        <div className="px-3 pt-5 d-flex justify-content-center gap-3 gap-md-5 flex-wrap">
          <div className="icon-box text-center">
            <i className="bi bi-facebook fs-4"></i>
          </div>

          <div className="icon-box text-center">
            <i className="bi bi-twitter fs-4"></i>
          </div>

          <div className="icon-box text-center">
            <i className="bi bi-google fs-4"></i>
          </div>

          <div className="icon-box text-center">
            <i className="bi bi-instagram fs-4"></i>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-light pb-5 fs-6">
          © 2023 Freeeze. All Rights Reserved.
        </div>

      </section>
    );
  }
}

export default Footer;
