import React, { Component } from "react";
import { Dropdown, Checkbox, Form } from "semantic-ui-react";
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

    const CheckboxExampleCheckbox = () => (
      <Checkbox label="Make my profile visible" />
    );

    return (
      <div className="ui segment">
        <Form onSubmit={checkIn}>
          <Form.Group>
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
            {CheckboxExampleCheckbox()}
          </Form.Group>
          <button className="ui secondary button">Check In</button>
        </Form>
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
