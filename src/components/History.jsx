import React, { Component } from "react";

class History extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>History</h1>
        <div className="row mt-2">
          {this.props.pets.length > 0 &&
            this.props.pets.map((pet) => (
              <div className="col-sm-6 mt-2">
                <div className="card">
                  <h3 className="card-title">{pet.name}</h3>
                  {pet.services.map((service) => (
                    <div>
                      <h4>{service.name}</h4>
                      <p>{service.created_at}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default History;
