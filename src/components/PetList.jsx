import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

class PetList extends Component {
  render() {
    console.log(this.props.clientPets);
    return (
      <div>
        <h1>{this.props.clientName}'s Pet list</h1>
        <div className="row mt-2">
          {this.props.clientPets.length > 0 ? (
            this.props.clientPets.map((pet, { appointments }, i) => (
              <div className="col-sm-6 mt-2">
                <div className="card">
                  <div className="card-body" key={i}>
                    <h5 className="card-title">{pet.name}</h5>
                    <p className="card-text">color: {pet.color}</p>
                    <p className="card-text">
                      special concerns: {pet.specialconcerns}
                    </p>

                    <div></div>
                    <Link
                      className="btn btn-primary ml-1"
                      onClick={() => this.props.petOnClickEdit(pet)}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger ml-1"
                      onClick={() => this.props.petOnClickDelete(pet)}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1> No pets </h1>
          )}
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
