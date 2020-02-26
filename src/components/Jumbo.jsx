import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import { Jumbotron, Button, ButtonToolbar } from "react-bootstrap";

class Jumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1></h1>
          <h3 style={{ color: "white", fontFamily: "sourc-sans-pro;" }}></h3>
          <div>
            <ButtonToolbar>
              <Button
                onClick={this.props.toggleAlert}
                variant="primary"
              ></Button>
              <MyModal />
            </ButtonToolbar>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
