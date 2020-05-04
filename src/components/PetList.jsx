import React, { Component } from "react";
import { Link } from "react-router-dom";

class PetList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.clientName}'s Pet list</h1>
        <div className="row mt-2">
          {this.props.clientPets.length > 0 &&
            this.props.clientPets.map((pets, { appointments }, i) => (
              <div className="col-sm-6 mt-2">
                <div className="card">
                  <div className="card-body" key={i}>
                    <h5 className="card-title">{pets.name}</h5>
                    <p className="card-text">color: {pets.color}</p>
                    <p className="card-text">
                      special concerns: {pets.specialconcerns}
                    </p>

                    <div></div>
                    <Link
                      className="btn btn-primary ml-1"
                      onClick={() => this.props.petOnClickEdit(pets)}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger ml-1"
                      onClick={() => this.props.petOnClickDelete(pets)}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Link to="/client">
          <button className="back-button ui button">Back</button>
        </Link>
      </div>
    );
  }
}

export default PetList;

// {appointments.map((appointment, j) => (
// <p key={j}>{appointment.created_at}</p>
// ))}
