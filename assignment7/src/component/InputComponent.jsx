import { Component } from "react";

export class InputComponent extends Component {
  constructor() {
    super();
    this.state = { input: "", data: "" , name:""};
    this.onSubmit = this.onSubmit.bind(this); 
  }

  InputChange(event) {
    console.log("something is changed");
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onSubmit() {
   const n= prompt("Enter Your Name");
    this.setState({ data: this.state.input, name:n });
  }

  render() {
    return (
      <>
        <h3>This is InputComponent</h3>
        <input
          type="text"
          onChange={(event) => this.InputChange(event)}
          value={this.state.input}
        />
        <button onClick={this.onSubmit}>Submit</button>
        <p>{this.state.data} {this.state.name}</p>
       
      </>
    );
  }
}
