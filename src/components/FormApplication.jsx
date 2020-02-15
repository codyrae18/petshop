import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class FormApplication extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          margin: "20%",
          padding: "5%"
        }}
      >
        <div>
          <Button variant="success">New Customer</Button>
          <Button style={{ marginLeft: "1%" }} variant="primary">
            New Pet
          </Button>
        </div>

        <div>
          <h1>FORM</h1>
        </div>

        <Form>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control placeholder="Address" />
            </Col>
            <Col>
              <Form.Control placeholder="Dog's Name" />
            </Col>
          </Row>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control placeholder="Breed" />
            </Col>
            <Col>
              <Form.Control placeholder="Special Concerns" />
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormApplication;
