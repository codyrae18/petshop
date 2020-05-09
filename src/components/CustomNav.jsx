import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Segment } from "semantic-ui-react";

class CustomNav extends Component {
  render() {
    const { activeItem } = this.props;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.props.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/client"
            name="Clients"
            active={activeItem === "Clients"}
            onClick={this.props.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/form"
            name="New Client"
            active={activeItem === "New Client"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/history"
            name="History"
            active={activeItem === "History"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/logout"
              name="Logout"
              active={activeItem === "Logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default CustomNav;
// {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">
//     <Link to="/" style={{ color: "black", textDecoration: "none" }}>
//       K-9 Klub Pet Grooming
//     </Link>
//   </a>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarText"
//     aria-controls="navbarText"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarText">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <Link to="/">
//           <a className="nav-link" href="#" style={{ color: "black" }}>
//             Home
//             <span className="sr-only">(current)</span>
//           </a>
//         </Link>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           <Link to="/client" style={{ color: "black" }}>
//             Clients
//           </Link>
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           <Link to="/form" style={{ color: "black" }}>
//             Add Client
//           </Link>
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>; */}

// <Col style={{ paddingTop: "5%" }}>
//   <Link to="/current" style={{ color: "black" }}>
//     Current
//   </Link>
// </Col>

// <Form inline>
//   <FormControl
//     type="text"
//     placeholder="Search"
//     className=" mr-sm-2"
//     name="search"
//     onChange={this.props.searchHandleChange}
//   />
// </Form>

{
  /* <Link to="/" className="item">
          Home
        </Link>
        <Link to="/client" className="item">
          Clients
        </Link>
        <Link to="/form" className="item">
          Add Client
        </Link>
        <Link to="/history" className="item">
          History
        </Link>
        <div className="right menu">
          <Link className="ui item">Calendar</Link>
          <Link className="ui item">Logout</Link>
        </div> */
}
