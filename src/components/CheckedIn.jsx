import React, { Component } from "react";

class CheckedIn extends Component {
  state = {};
  render() {
    const { appointments } = this.props;
    return (
      <div>
        {appointments.length > 0 &&
          appointments.map((appointment) => (
            <div>
              <p>pet id: {appointment.pet_id}</p>
              <p>service id: {appointment.service_id}</p>
              <h1>---</h1>
            </div>
          ))}
      </div>
    );
  }
}
export default CheckedIn;
