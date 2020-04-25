import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row, Form, FormControl } from "react-bootstrap";

class CustomNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            K-9 Klub Pet Grooming
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/client" style={{ color: "black" }}>
                  Clients
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/form" style={{ color: "black" }}>
                  Add Client
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default CustomNav;

// <Col style={{ paddingTop: "5%" }}>
//   <Link to="/current" style={{ color: "black" }}>
//     Current
//   </Link>
// </Col>

// <Form inline>
//   <FormControl
//     type="text"
//     placeholder="Search"
//     className=" mr-sm-2"
//     name="search"
//     onChange={this.props.searchHandleChange}
//   />
// </Form>
