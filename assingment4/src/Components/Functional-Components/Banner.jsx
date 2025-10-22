import React from "react";
import bannerImg from "../../assets/Banner.jpg";

const Banner = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        paddingLeft: "30px",
        position: "relative",
      }}
    >
     
      <style>
        {`
          .banner-title {
            font-size: 2rem;
          }
          .banner-text {
            font-size: 6rem;
            line-height: 1.2;
          }
          @media (max-width: 768px) {
            .banner-title {
              font-size: 1rem;
            }
            .banner-text {
              font-size: 1.5rem;
            }
              
          }
        `}
      </style>

      <div className="text-dark mt-5 ms-0 ms-lg-5">
        <h5 className="mb-2 text-uppercase banner-title">
          Spring / Summer Collection 2017
        </h5>
        <p className="mb-3 banner-text">
          Get up to 30% Off <br /> New Arrivals
        </p>

        <button className="btn btn-danger mt-2 mt-lg-4 px-2 px-lg-5 fs-6 py-1 py-lg-3 fw-bold btn-square">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
