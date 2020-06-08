import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class SignUp extends Component {
  render() {
    const { addingUser, handleChange, accounts } = this.props;
    return (
      <Form onSubmit={addingUser}>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Sign-Up</Button>
      </Form>
    );
  }
}

export default SignUp;
