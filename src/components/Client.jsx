import React, { Component } from "react";
// import AddDog from "./AddDog";

class Client extends Component {
  render() {
    return (
      <div>
        <div className="row mt-2">
          {this.props.clients.map((client) => (
            <div className="col-sm-6 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {client.lastname}, {client.firstname}
                  </h5>
                  <p className="card-text">home phone: {client.homephone}</p>
                  <p className="card-text">workphone: {client.workphone}</p>
                  <a className="btn btn-secondary">Dogs list</a>
                  <a
                    className="btn btn-primary ml-1"
                    id={client.id}
                    onClick={() => this.props.addingDogToAClient(client)}
                  >
                    Add a dog
                  </a>
                  <a
                    className="btn btn-danger ml-1"
                    onClick={() => this.props.deleteDogHandleClick(client)}
                  >
                    Delete Client
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

export default Client;
