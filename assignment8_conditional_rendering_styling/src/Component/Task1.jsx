import { Component } from "react";

export class LoginControl extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  loginHandle = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logoutHandle = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isLoggedIn === false) {
      return (
        
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="card p-4 shadow-lg text-center d-flex justify-content-center " style={{ width: "30rem",height:"40vh" }}>
            <h3 className="text-primary mb-3">Please log in</h3>
           <div>
             <button
              className="btn btn-success w-50"
              onClick={this.loginHandle}
            >
              Login
            </button>
           </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
           <div className="card p-4 shadow-lg text-center d-flex justify-content-center " style={{ width: "30rem",height:"40vh" }}>
            <h3 className="text-success mb-3">Welcome Back!</h3>
          <div>
              <button
              className="btn btn-danger w-50"
              onClick={this.logoutHandle}
            >
              Logout
            </button>
          </div>
          </div>
        </div>
      );
    }
  }
}
