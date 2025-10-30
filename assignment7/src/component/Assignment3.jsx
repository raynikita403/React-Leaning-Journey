import { Component } from "react";

export class PropsWithDifferentDataTypes extends Component {
  render() {
    return (
      <>
        <div
          className="d-flex ms-2 p-5 flex-column justify-content-center align-items-center bg-dark text-white rounded-4 shadow-lg"
          style={{ height: "50vh" }}
        >
          <p className="text-danger fs-5 fw-bold">Employee Information</p>
          <p>Name: {this.props.Name}</p>
          <p>Age: {this.props.Age}</p>

          {/* ✅ Convert boolean to readable text */}
          <p>IsActive: {this.props.IsActive ? "True" : "False"}</p>

          <div>
            <p>Skills:</p>
            <ul>
              {this.props.Skills.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
