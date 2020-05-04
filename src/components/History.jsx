import React, { Component } from "react";

class History extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>History</h1>
        {this.props.pets.length > 0 &&
          this.props.pets.map((pet) => (
            <div>
              <p> {pet.name}</p>
              {pet.appointments.map((appointment) => (
                <p>{appointment.created_at}</p>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default History;
