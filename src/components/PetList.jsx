import React, { Component } from "react";

class PetList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.clientName}'s Pet list</h1>
        <div className="row mt-2">
          {this.props.clientPets.length > 0 &&
            this.props.clientPets.map((pets) => (
              <div className="col-sm-6 mt-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{pets.name}</h5>
                    <p className="card-text">color: {pets.color}</p>
                    <p className="card-text">
                      special concerns: {pets.specialconcerns}
                    </p>
                    <a
                      className="btn btn-primary ml-1"
                      onClick={() => this.props.petOnClickEdit(pets)}
                    >
                      Edit
                    </a>
                    <a
                      className="btn btn-danger ml-1"
                      onClick={() => this.props.petOnClickDelete(pets)}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default PetList;
