import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        <div className="clientform">
          <Form onSubmit={addingClient}>
            <h1>Customer Info</h1>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="First name"
                placeholder="First name"
                id="firstname"
                name="firstname"
                value={clientInfo.firstName}
                onChange={formHandleChange}
              />
              <Form.Input
                label="Last name"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                value={clientInfo.lastName}
                onChange={formHandleChange}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
                label="Email"
                placeholder="Email"
                onChange={formHandleChange}
              />
              <Form.Input
                id="homephone"
                value={clientInfo.homephone}
                name="homephone"
                label="Phone"
                placeholder="(xxx)xxx-xxxx"
                onChange={formHandleChange}
              />
              <Form.Input
                label="Alt. Phone"
                placeholder="(xxx)xxx-xxxx"
                id="workphone"
                name="workphone"
                value={clientInfo.workphone}
                onChange={formHandleChange}
              />
            </Form.Group>
            <button class="ui button">Submit</button>
          </Form>
        </div>
        <Link to="/client">
          <button className="back-button ui button">Back</button>
        </Link>
      </div>
    );
  }
}

export default FormApplication;
/* <Form onSubmit={addingClient}>
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
</Form>; */
