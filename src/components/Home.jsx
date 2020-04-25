import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-detail">
        <div style={{ margin: "5%" }}>
          <h1>Login</h1>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Username" />
                <Form.Control
                  placeholder="Password"
                  style={{ marginTop: "2%" }}
                />
                <Row style={{ marginTop: "2%" }}>
                  <Col>
                    <Button variant="success">Login</Button>
                    <Link to="/signup">
                      <Button
                        onClick=""
                        style={{ marginLeft: "1%" }}
                        variant="primary"
                      >
                        Create a User
                      </Button>
                    </Link>
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
