import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class EditClient extends Component {
  render() {
    console.log("edit application props", this.props.clientInfo);
    const { clientInfo, formHandleChange, submitingEditClient } = this.props;
    return (
      <div
        style={{
          margin: "10%",
          padding: "5%",
        }}
      >
        <div className="clientform">
          <Form onSubmit={submitingEditClient}>
            <h1>Customer Info</h1>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="First name"
                value={clientInfo.firstname}
                placeholder="First name"
                id="firstname"
                name="firstname"
                onChange={formHandleChange}
              />
              <Form.Input
                label="Last name"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                value={clientInfo.lastname}
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

export default EditClient;
