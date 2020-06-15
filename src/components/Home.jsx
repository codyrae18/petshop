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

//

// {appointments.length > 0 &&
//   appointments.map((appointment) => (
//     <div>
//       <p>pet id: {appointment.pet_id}</p>
//       <p>service id: {appointment.service_id}</p>
//       <h1>---</h1>
//     </div>
//   ))}

//

// ready code

{
  /* <div>
  <h3 className="ui header">Dashboard</h3>
  <div className="ui grid">
    <div className="four wide column">
      <div className="ui vertical fluid tabular menu">
        <a className="active item">Quick Check In</a>
        <a className="item">Checked In {appointments.length}</a>
      </div>
    </div>
    <div className="dash twelve wide stretched column">
      <div className="ui segment">
        <div className="ui input focus">
          <SearchCheckIn
            handleResultSelect={this.props.handleResultSelect}
            handleSearchChange={this.props.handleSearchChange}
            pets={this.props.pets}
            isLoading={this.props.isLoading}
            results={this.props.results}
            value={this.props.value}
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
    <div className="row mt-2">
      {this.props.pets.length > 0 &&
        this.props.pets.map((pet) => (
          <div className="col-sm-6 mt-2">
            <div className="card">
              <h5 className="card-title">{pet.name}</h5>
              {pet.services.map((service) => (
                <div className="card">
                  <h5 className="card-title">{service.name}</h5>
                  <p>{service.created_at}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  </div>
</div>; */
}
