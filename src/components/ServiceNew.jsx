import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ServiceNew extends Component {
  render() {
    return (
      <Form onSubmit={this.props.addingNewService}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Service Name"
            placeholder="Service Name"
            id="name"
            name="name"
            value={this.props.ServiceNew}
            onChange={this.props.handleChangeServiceNew}
          />
          <button class="ui button">Submit</button>
          <Link to="/client">
            <button className="back-button ui button">Back</button>
          </Link>
        </Form.Group>
      </Form>
    );
  }
}

export default ServiceNew;
