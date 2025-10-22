import React, { Component } from "react";
import banner1 from "../../assets/banner_1.jpg";
import banner2 from "../../assets/banner_2.jpg";
import banner3 from "../../assets/banner_3.jpg";

class CardSection extends Component {
  render() {
    return (
      <div className="container py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm position-relative border-0">
              <img
                src={banner1}
                className="card-img-top"
                alt="Women's Accessories"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <button className="btn btn-light text-dark px-5 text-uppercase fs-3 fw-bold" style={{ borderRadius: 0 }}>
                  Women's
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm position-relative border-0">
              <img
                src={banner2}
                className="card-img-top"
                alt="Men's Accessories"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <button className="btn btn-light text-dark px-5 text-uppercase fs-3 fw-bold" style={{ borderRadius: 0 }}>
                  Accessories
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm position-relative border-0">
              <img
                src={banner3}
                className="card-img-top"
                alt="Unisex Accessories"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <button className="btn btn-light text-dark px-5 text-uppercase fs-3 fw-bold" style={{ borderRadius: 0 }}>
                  Men's
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSection;
