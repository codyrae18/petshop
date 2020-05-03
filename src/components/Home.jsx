import React, { Component } from "react";
import { Dropdown, Search } from "semantic-ui-react";
import SearchCheckIn from "./SearchCheckIn";

class Home extends Component {
  render() {
    console.log(this.props.services);
    const {
      services,
      servicesOnClick,
      selectPetOnClick,
      pets,
      checkIn,
    } = this.props;

    const serviceOption =
      services.length > 0 &&
      services.map((service) => ({
        key: service.id,
        text: service.name,
        value: service.id,
      }));

    const petOption =
      pets.length > 0 &&
      pets.map((pet) => ({
        key: pet.id,
        text: pet.name,
        value: pet.id,
      }));
    return (
      <div>
        <h3 className="ui header">Dashboard</h3>
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
              <a className="active item">Check In</a>
              <a className="item">Scheduled Appointments</a>
            </div>
          </div>
          <div className="dash twelve wide stretched column">
            <div className="ui segment">
              <div className="ui input focus">
                <SearchCheckIn
                  handleResultSelect={this.props.handleResultSelect}
                  handleSearchChange={this.props.handleSearchChange}
                />
                <Dropdown
                  placeholder="Pet"
                  options={petOption}
                  search
                  selection
                  fluid
                  allowAdditions
                  onChange={selectPetOnClick}
                />
                <Dropdown
                  placeholder="Service"
                  options={serviceOption}
                  search
                  selection
                  fluid
                  allowAdditions
                  onChange={servicesOnClick}
                />
              </div>
              <button className="ui secondary button" onClick={checkIn}>
                Check In
              </button>
              <button className="ui button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
