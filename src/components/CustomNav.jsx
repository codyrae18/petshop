import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomNav extends Component {
  render() {
    return (
      <div className="ui menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/client" className="item">
          Clients
        </Link>
        <Link to="/form" className="item">
          Add Client
        </Link>
        <div className="right menu">
          <Link className="ui item">Calendar</Link>
          <Link className="ui item">Logout</Link>
        </div>
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
