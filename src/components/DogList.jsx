import React, { Component } from "react";

class DogList extends Component {
  render() {
    console.log("dog list props -> ", this.props.clientDogs);
    return (
      <div>
        <h1>Dog list</h1>
        <div className="row mt-2">
          {this.props.clientDogs.length > 0 &&
            this.props.clientDogs.map((dogs) => (
              <div className="col-sm-6 mt-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dogs.name}</h5>
                    <p className="card-text">color: {dogs.color}</p>
                    <p className="card-text">
                      special concerns: {dogs.specialconcerns}
                    </p>
                    <a
                      className="btn btn-primary ml-1"
                      onClick={() => this.props.dogOnClickDelete(dogs)}
                    >
                      Edit
                    </a>
                    <a
                      className="btn btn-danger ml-1"
                      onClick={() => this.props.dogOnClickDelete(dogs)}
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

export default DogList;
