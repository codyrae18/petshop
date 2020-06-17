import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import CheckedIn from "./CheckedIn";
import CheckInForm from "./CheckInForm";

class Home extends Component {
  render() {
    const { activeItemHome, handleItemClickHome } = this.props;
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Quick Check In"
              active={activeItemHome === "Quick Check In"}
              onClick={handleItemClickHome}
            />
            <Menu.Item
              name="Checked In"
              active={activeItemHome === "Checked In"}
              onClick={handleItemClickHome}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {activeItemHome === "Checked In" && (
              <CheckedIn
                services={this.props.services}
                servicesOnClick={this.props.servicesOnClick}
                selectPetOnClick={this.props.selectPetOnClick}
                pets={this.props.pets}
                appointments={this.props.appointments}
                checkIn={this.props.checkIn}
                finishOnClick={this.props.finishOnClick}
              />
            )}
            {activeItemHome === "Quick Check In" && (
              <CheckInForm
                services={this.props.services}
                servicesOnClick={this.props.servicesOnClick}
                selectPetOnClick={this.props.selectPetOnClick}
                pets={this.props.pets}
                appointments={this.props.appointments}
                checkIn={this.props.checkIn}
                handleResultSelect={this.props.handleResultSelect}
                handleSearchChange={this.props.handleSearchChange}
                isLoading={this.props.isLoading}
                results={this.props.results}
                value={this.props.value}
              />
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
