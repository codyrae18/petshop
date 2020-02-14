import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <div className="home-detail">
        <div style={{ margin: "20%" }}>
          <h1>Login</h1>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Username" />
                <Form.Control
                  placeholder="Password"
                  style={{ marginTop: "1%" }}
                />
                <Row style={{ marginTop: "1%" }}>
                  <Col>
                    <Button variant="success">Login</Button>
                    <Button style={{ marginLeft: "1%" }} variant="primary">
                      Create a User
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
