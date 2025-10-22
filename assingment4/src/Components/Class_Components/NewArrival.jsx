import React, { Component } from "react";
import img1 from "../../assets/product_1.png";
import img2 from "../../assets/product_2.png";
import img3 from "../../assets/product_3.png";
import img4 from "../../assets/product_4.png";
import img5 from "../../assets/product_5.png";
import img6 from "../../assets/product_6.png";
import img7 from "../../assets/product_7.png";
import img8 from "../../assets/product_8.png";
import img9 from "../../assets/product_9.png";
import img10 from "../../assets/product_10.png";

class NewArrival extends Component {
  render() {
    const products = [
      {
        img: img1,
        price: 520,
        description: "Fujifilm XIOOT 16 MP Digital Camera (Silver) ",
      },
      {
        img: img2,
        price: 610,
        description: "Samsung CF591 Series Curved 27-lnch FHD ",
      },
      {
        img: img3,
        price: 420,
        description: "DYMO LabelWriter 450 Turbo Thermal Label ",
      },
      {
        img: img4,
        price: 180,
        description: "Pryma Headphones, Rose Gold & Grey",
      },
      {
        img: img5,
        price: 180,
        description: "Comfortable cotton scarf ideal for all seasons.",
      },
      {
        img: img6,
        price: 560,
        description: "Comfortable cotton scarf ideal for all seasons.",
      },
      {
        img: img7,
        price: 890,
        description: "Comfortable cotton scarf ideal for all seasons.",
      },
      {
        img: img8,
        price: 678,
        description: "Comfortable cotton scarf ideal for all seasons.",
      },
      {
        img: img9,
        price: 456,
        description: "Comfortable cotton scarf ideal for all seasons.",
      },
      {
        img: img10,
        price: 785,
        description: "Comfortable cotton scarf ideal for all seasons.",
      },
    ];

    return (
      <div className="container text-center my-5">
        <h1 className="mb-2" style={{ fontSize: "50px" }}>
          New Arrivals
        </h1>

        <div
          style={{
            width: "80px",
            height: "5px",
            backgroundColor: "#dc3545",
            margin: "0 auto 40px auto",
            borderRadius: "10px",
          }}
        ></div>
        <div className="btn-group mb-5" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-danger p-2 p-md-2 px-2 px-md-5"
            style={{ borderRadius: 0 }}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary p-2 p-md-2 px-2 px-md-5"
            style={{
              borderRadius: 0,
              border: "1px solid #dcdcdc",
              color: "#6c757d",
            }}
          >
            Women's
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary p-2 p-md-2 px-2 px-md-5"
             style={{
              borderRadius: 0,
              border: "1px solid #dcdcdc",
              color: "#6c757d",
            }}
          >
            Accessories
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary p-2 p-md-2 px-2 px-md-5"
            style={{
              borderRadius: 0,
              border: "1px solid #dcdcdc",
              color: "#6c757d",
            }}
          >
            Men's
          </button>
        </div>

        {/* Cards Section */}
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-4">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={`Product ${index + 1}`}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{product.description}</p>
                  <p className="fw-bold text-danger fs-5">${product.price}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewArrival;
