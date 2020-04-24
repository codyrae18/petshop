import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class Current extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "20%", marginTop: "10%" }}>
          <h1>Petshop</h1>
          <Container style={{ border: "1px solid black", height: "2500px" }}>
            <Row>
              <Col style={{ border: "2px solid black" }}>Name:</Col>
              <Col style={{ border: "2px solid black" }}>Pet:</Col>
              <Col style={{ border: "2px solid black" }}>Time:</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Current;
