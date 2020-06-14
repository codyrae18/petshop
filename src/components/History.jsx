import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class History extends Component {
  render() {
    const { pets, services } = this.props;
    return (
      <Card.Group>
        {pets.length > 0 && services.length ? (
          pets.map((pet) => (
            <Card>
              <Card.Content>
                <Card.Header>{pet.name}</Card.Header>
                {pet.appointments.map((appointment) => (
                  <div>
                    <Card.Meta>Date: {appointment.date}</Card.Meta>
                    <Card.Meta>Service: {appointment.service_id}</Card.Meta>
                    <div>
                      {pet.services.map(
                        (service) =>
                          service.id === appointment.service_id && (
                            <Card.Meta>{service.name} </Card.Meta>
                          )
                      )}
                    </div>
                  </div>
                ))}
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
