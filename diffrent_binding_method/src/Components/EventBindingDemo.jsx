import { Component } from "react";

//Event Binding 
export class EventBinding extends Component {
  constructor() {
    super();
    this.state = { answere: "" };
    this.handleShowAns = this.showAns.bind(this);
    this.handleShowAns2 = this.showAns2.bind(this);
  }

  showAns() {
    this.setState({
      answere: "React is a JavaScript library for creating User Interfaces",
    });
  }

  showAns2() {
    this.setState({
      answere: "It is used for creating Single Page Applications",
    });
  }

  showAns3() {
    this.setState({
      answere: "It is easy to learn and use",
    });
  }

  render() {
    return (
      <div className="p-3 text-center container mt-3">
        <h3 className="mb-3">What is React JS?</h3>
        <p className="fs-5 fw-semibold">Ans: {this.state.answere}</p>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {/* Method 1: Binding in constructor */}
          <button className="btn btn-primary" onClick={this.handleShowAns}>
            Ans 1 (Constructor)
          </button>

          {/* Method 2: Arrow function in render */}
          <button
            className="btn btn-danger"
            onClick={() => this.handleShowAns2()}
          >
            Ans 2 (Arrow Function)
          </button>

          {/* Method 3: Binding directly in render */}
          <button
            className="btn btn-warning text-dark"
            onClick={this.showAns3.bind(this)}
          >
            Ans 3 (Bind in Render)
          </button>
        </div>
      </div>
    );
  }
}

// Theme Component
export class ThemeComponent extends Component {
  constructor() {
    super();
    this.state = {
      bg: "white",
      color: "black",
    };

    this.handleDarkThemeMethod = this.handleDarkTheme.bind(this);
    this.handleLightThemeMethod = this.handleLightTheme.bind(this);
  }

  handleDarkTheme() {
    this.setState({
      bg: "black",
      color: "white",
    });
  }

  handleLightTheme() {
    this.setState({
      bg: "white",
      color: "black",
    });
  }

  render() {
    return (
      <div
        className="p-3 mt-3 text-center container"
        style={{
          backgroundColor: this.state.bg,
          color: this.state.color,
          borderRadius: "10px",
        }}
      >
        <h4>Theme Changer</h4>
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
          <button
            className="btn btn-dark text-light"
            onClick={this.handleDarkThemeMethod}
          >
            Dark Theme
          </button>
          <button
            className="btn btn-success"
            onClick={this.handleLightThemeMethod}
          >
            Light Theme
          </button>
        </div>
      </div>
    );
  }
}

// Random Number Generator
export class RandomNumberGenerator extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleGenerate() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState({ number: randomNum });
  }

  render() {
    return (
      <div className="p-3 mt-4 text-center container">
        <h4>Random Number Generator</h4>
        <p className="fs-5 fw-semibold">Random Number: {this.state.number}</p>
        <button className="btn btn-primary px-4" onClick={this.handleGenerate}>
          Generate
        </button>
      </div>
    );
  }
}

// Counter Application
export class CounterDemo extends Component {
  constructor() {
    super();
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="text-center p-4 container">
        <h3>Counter Application</h3>
        <h2>{this.state.count}</h2>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-success" onClick={this.increment}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={this.decrement}>
            Decrement
          </button>
          <button className="btn btn-secondary" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
