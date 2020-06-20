import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class FormApplication extends Component {
  render() {
    const { clientInfo, formHandleChange, addingClient } = this.props;
    return (
      <div>
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
            <Link to="/client">
              <button className="back-button ui button">Back</button>
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}

export default FormApplication;
