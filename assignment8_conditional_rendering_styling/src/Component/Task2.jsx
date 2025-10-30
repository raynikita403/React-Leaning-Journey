import { Component } from "react";

export class ColorText extends Component {
  constructor() {
    super();
    this.state = {
      isRed: true
    };
  }

  handleColorChange = () => {
    this.setState({ isRed: !this.state.isRed });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg text-center d-flex justify-content-center align-items-center"
          style={{ width: "30rem", height: "40vh" }}
        >
          <h5
            style={{
              color: this.state.isRed ? "red" : "blue",
              fontWeight: "bold",
            }}
          >
            React is Awesome !
          </h5>
          <button style={{
              background: this.state.isRed ? "blue" : "red",
              fontWeight: "bold",
            }}
            className="btn btn-primary mt-3 w-50"
            onClick={this.handleColorChange}
          >
            Change Color
          </button>
        </div>
      </div>
    );
  }
}
