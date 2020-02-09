import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row } from "react-bootstrap";

class CustomNav extends Component {
  render() {
    return (
      <nav>
        <Navbar bg="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="nav-detail">
            <Row>
              <Col>
                <Link to="/">Home</Link>
              </Col>

              <Col>
                <Link to="/form">Form</Link>
              </Col>
            </Row>
          </div>
        </Navbar>
      </nav>
    );
  }
}

export default CustomNav;
