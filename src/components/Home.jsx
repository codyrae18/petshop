import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Table,
  Icon,
  Search,
} from "semantic-ui-react";

function Home() {
  return (
    <div>
      <h3 class="ui header">Dashboard</h3>
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui vertical fluid tabular menu">
            <a class="active item">Check In</a>
            <a class="item">Scheduled Appointments</a>
          </div>
        </div>
        <div class="twelve wide stretched column">
          <div class="ui segment">
            <div class="ui input focus">
              <input type="text" placeholder="Search..."></input>
            </div>
            <div>
              <div
                role="combobox"
                aria-expanded="false"
                class="ui search selection dropdown"
              >
                <input
                  type="text"
                  aria-autocomplete="list"
                  autocomplete="off"
                  class="search"
                  tabindex="0"
                  value=""
                />
                <div
                  class="default text"
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  State
                </div>
                <i aria-hidden="true" class="dropdown icon"></i>
                <div role="listbox" class="menu transition">
                  <div
                    role="option"
                    aria-checked="false"
                    aria-selected="true"
                    class="selected item"
                  >
                    <span class="text">Alabama</span>
                  </div>
                </div>
              </div>

              <button class="ui secondary button">Check In</button>
              <button class="ui button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="home">
  <div className="home-detail">
    <div style={{ margin: "5%" }}>
      <h1>Login</h1>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Username" />
            <Form.Control placeholder="Password" style={{ marginTop: "2%" }} />
            <Row style={{ marginTop: "2%" }}>
              <Col>
                <Button variant="success">Login</Button>
                <Link to="/signup">
                  <Button
                    onClick=""
                    style={{ marginLeft: "1%" }}
                    variant="primary"
                  >
                    Create a User
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
</div>; */
}

// log in

{
  /* <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="USERNAME"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="PASSWORD"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Admin ? <a href="/register">Register</a>
          </Message>
        </Grid.Column>
      </Grid> */
}
