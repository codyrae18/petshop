import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row, Form, FormControl } from "react-bootstrap";

class CustomNav extends Component {
  render() {
    return (
      <nav>
        <Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="nav-detail">
            <Row>
              <Col>
                <h3>K-9 Klub Pet Grooming</h3>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/current" style={{ color: "black" }}>
                  Current
                </Link>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/form" style={{ color: "black" }}>
                  Add Client
                </Link>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/client" style={{ color: "black" }}>
                  Clients
                </Link>
              </Col>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  name="search"
                  onChange={this.props.searchHandleChange}
                />
              </Form>
            </Row>
          </div>
        </Navbar>
      </nav>
    );
  }
}

export default CustomNav;
