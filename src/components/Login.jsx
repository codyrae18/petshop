import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class Login extends Component {
  render() {
    const { handleLoginChange, handleClick } = this.props;

    return (
      <Form onSubmit={handleClick}>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            id="username"
            name="username"
            onChange={handleLoginChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            onChange={handleLoginChange}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

export default Login;
