import React, { Component } from "react";

class SignUp extends Component {
  render() {
    const { handleSubmit, handleChange, accounts } = this.props;
    return (
      <div style={{ margin: "15%" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="username"
              name="username"
              type="username"
              className="form-control"
              placeholder="usernam"
              onChange={handleChange}
              value={accounts.username}
            ></input>
          </div>
          <div className="form-group">
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              value={accounts.password}
            ></input>
          </div>
          <div className="form-group">
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={accounts.password_digest}
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
