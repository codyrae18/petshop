import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class FormApplication extends Component {
  render() {
    // console.log("form application props", this.props);
    const { clientInfo, formHandleChange, addingClient } = this.props;
    return (
      <div
        style={{
          margin: "10%",
          padding: "5%",
        }}
      >
        {/* <div>
          <Button variant="success">New Client</Button>
          <Button style={{ marginLeft: "1%" }} variant="primary">
            New Pet
          </Button>
        </div> */}

        <div>
          <h1>FORM</h1>
        </div>

        <Form onSubmit={addingClient}>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control
                id="firstname"
                name="firstname"
                type="firstname"
                className="form-control"
                onChange={formHandleChange}
                value={clientInfo.firstName}
                placeholder="First name"
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                id="lastname"
                name="lastname"
                type="lastame"
                className="form-control"
                onChange={formHandleChange}
                value={clientInfo.lastName}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "1%" }}>
            <Col>
              <Form.Control
                placeholder="Homephone #"
                id="homephone"
                name="homephone"
                type="homephone"
                className="form-control"
                onChange={formHandleChange}
                value={clientInfo.homephone}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Workphone #"
                id="workphone"
                name="workphone"
                type="workphone"
                className="form-control"
                onChange={formHandleChange}
                value={clientInfo.workphone}
              />
            </Col>
          </Row>
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormApplication;
