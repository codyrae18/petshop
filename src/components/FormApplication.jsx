import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

class FormApplication extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: "20%" }}>
        <div>
          <h1>FORM</h1>
        </div>

        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Address" />
            </Col>
            <Col>
              <Form.Control placeholder="Dog's Name" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Breed" />
            </Col>
            <Col>
              <Form.Control placeholder="Special Concerns" />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default FormApplication;
