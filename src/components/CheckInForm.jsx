import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
// import SearchCheckIn from "./SearchCheckIn";

class CheckInForm extends Component {
  render() {
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
      <div className="ui segment">
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
        <button className="ui secondary button" onClick={checkIn}>
          Check In
        </button>
        <button className="ui button">Cancel</button>
      </div>
    );
  }
}

export default CheckInForm;

{
  /* <SearchCheckIn
          handleResultSelect={this.props.handleResultSelect}
          handleSearchChange={this.props.handleSearchChange}
          pets={this.props.pets}
          isLoading={this.props.isLoading}
          results={this.props.results}
          value={this.props.value}
        /> */
}
