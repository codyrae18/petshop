import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class FormApplication extends Component {
  render() {
    console.log("form application props", this.props);
    const { customerInfo, formHandleChange } = this.props;
    return (
      <div
        style={{
          margin: "10%",
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
              <Form.Control
                id="firstName"
                name="firstName"
                type="firstName"
                className="form-control"
                onChange={formHandleChange}
                value={customerInfo.firstName}
                placeholder="First name"
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                id="lastName"
                name="lastName"
                type="lastName"
                className="form-control"
                onChange={formHandleChange}
                value={customerInfo.lastName}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control
                placeholder="Dog's Name"
                id="dogName"
                name="dogName"
                type="dogName"
                className="form-control"
                onChange={formHandleChange}
                value={customerInfo.dogName}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control
                placeholder="Breed"
                id="breed"
                name="breed"
                type="breed"
                className="form-control"
                onChange={formHandleChange}
                value={customerInfo.breed}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Special Concerns"
                id="specialty"
                name="specialty"
                type="specialty"
                className="form-control"
                onChange={formHandleChange}
                value={customerInfo.specialty}
              />
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
