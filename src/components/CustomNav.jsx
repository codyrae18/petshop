import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row, Form, FormControl } from "react-bootstrap";

class CustomNav extends Component {
  render() {
    return (
      <nav>
        <Navbar bg="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="nav-detail">
            <Row>
              <Col>
                <h3>K-9 Klub Dog Grooming</h3>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/">Home</Link>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/current">Current</Link>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/form">Form</Link>
              </Col>

              <Col style={{ paddingTop: "5%" }}>
                <Link to="/signup">Sign Up</Link>
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
