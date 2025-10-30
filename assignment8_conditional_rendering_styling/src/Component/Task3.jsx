import React, { Component } from "react";

export class MessageToggle extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggleMessage = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card p-4 shadow-lg text-center d-flex justify-content-center align-items-center"
          style={{ width: "30rem", height: "40vh" }}
        >
          <button
            onClick={this.toggleMessage}
            className="btn btn-dark fw-bold px-4 py-2 mb-3"
          >
            Show/Hide Message
          </button>

          {/* Using ternary */}
          {this.state.show ? (
            <h4 className="text-success">Hello from React!</h4>
          ) : (
            <h4 className="text-danger">Message Hidden!</h4>
          )}
        </div>
      </div>
    );
  }
}
