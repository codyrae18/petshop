import React, { Component } from "react";
import { Form, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ServiceNew extends Component {
  render() {
    const { services } = this.props;
    return (
      <div>
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
        {services.length > 0 &&
          services.map((service) => (
            <List>
              <List.Item>{service.name}</List.Item>
              <Button
                color="red"
                onClick={() => this.props.serviceOnClickDelete(service)}
              >
                Delete
              </Button>
            </List>
          ))}
      </div>
    );
  }
}

export default ServiceNew;
