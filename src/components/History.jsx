import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class History extends Component {
  render() {
    const { pets, services } = this.props;
    const data = [];

    if (pets.length > 0) {
      pets.map((pet) => {
        if (pet.appointments.length > 0) {
          pet.appointments.map((appointment) => {
            pet.services.map((service) => {
              data.push({
                service: appointment.date,
              });
            });
          });
        }
      });
    }

    console.log(data);
    return (
      <Card.Group>
        {this.props.pets.length > 0 ? (
          this.props.pets.map((pet) => (
            <Card>
              <Card.Content>
                <Card.Header>{pet.name}</Card.Header>
                <div>
                  {pet.appointments.map((info) => (
                    <div>
                      {pet.services.map((s) => (
                        <div>
                          <Card.Meta>Date {info.date}</Card.Meta>
                          <Card.Meta>Service: {s.name}</Card.Meta>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Content>
              <Card.Header>No Pets</Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    );
  }
}

export default History;

{
  /* <div>
        <h1>History</h1>
        <div className="row mt-2">
          {this.props.pets.length > 0 &&
            this.props.pets.map((pet) => (
              <div className="col-sm-6 mt-2">
                <div className="card">
                  <h3 className="card-title"></h3>
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
      </div> */
}

// ready

// {pet.services.map((service) => (
//   <Card>
//     <Card.Description>
//       <strong>Service Type: {service.name}</strong>
//     </Card.Description>
//     <Card.Description></Card.Description>
//   </Card>
// ))}
