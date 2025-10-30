import { Component } from "react";

// Parent Component
export class PassStateAsProps extends Component {
  constructor() {
    super();
    this.state = {
      msg: " Message from Parent: Learning React Props!"
    };
  }

  render() {
    return (
      <>
        <h3>Parent Component</h3>
        <ChildComponent message={this.state.msg} />
      </>
    );
  }
}

// Child Component
export class ChildComponent extends Component {
  render() {
    return (
      <>
       
        <h3> {this.props.message}</h3>
      </>
    );
  }
}
