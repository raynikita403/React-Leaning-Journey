import { Component } from "react";

export class HandleInputWithState extends Component {
  constructor() {
    super();
    this.state = { input: "" };
  }

  handleOnChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <>
        <div
          className="d-flex flex-column justify-content-center align-items-center bg-dark text-white p-5 rounded-4 shadow-lg"
          style={{ height: "50vh" }}
        >
          <h4 className="mb-4">✨ Enter Your Name ✨</h4>

          <input
            type="text"
            className="form-control w-70 text-center rounded-3"
            placeholder="Enter Your Name"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.input}
          />

          <p className="mt-4 fs-5 fw-semibold text-light">Hello ! {this.state.input}</p>
        </div>
      </>
    );
  }
}
