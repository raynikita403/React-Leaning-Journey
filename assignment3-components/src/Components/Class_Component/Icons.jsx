import React from "react";

class Icons extends React.Component {
  render() {
    return (
      <section className="icon-section p-5 d-flex flex-wrap justify-content-center gap-4">


         <div className="text-center text-light ms-5">
          <i className="bi bi-cake2-fill icon-size "></i>
          <p className="mt-2 fs-3">Products</p>
        </div>

        <div className="text-center text-light ms-5">
          <i className="bi bi-hand-thumbs-up-fill icon-size "></i>
          <p className="mt-2 fs-3">Our Story</p>
        </div>

        <div className="text-center text-light ms-5">
          <i className="bi bi-cup-straw icon-size"></i>
          <p className="mt-2 fs-3">Flavour</p>
        </div>

        <div className="text-center text-light ms-5">
          <i className="bi bi-geo-alt-fill icon-size"></i>
          <p className="mt-2 fs-3">Location</p>
        </div>

       
      </section>
    );
  }
}

export default Icons;
