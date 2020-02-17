import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              id="username"
              name="username"
              type="username"
              className="form-control"
              placeholder="username"
            ></input>
          </div>
          <div className="form-group">
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
          </div>
          <div className="form-group">
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            ></input>
          </div>
          <div className="form-group">
            <input
              id="description"
              name="description"
              type="description"
              className="form-control"
              placeholder="Description"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
