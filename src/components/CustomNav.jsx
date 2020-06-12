import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Dropdown } from "semantic-ui-react";

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
          <Dropdown item text="Client">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Menu.Item
                  as={Link}
                  to="/client"
                  name="Clients"
                  active={activeItem === "Clients"}
                  onClick={this.props.handleItemClick}
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <Menu.Item
                  as={Link}
                  to="/form"
                  name="New Client"
                  active={activeItem === "New Client"}
                  onClick={this.props.handleItemClick}
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <Menu.Item
                  as={Link}
                  to="/services/new"
                  name="New Services"
                  active={activeItem === "New Services"}
                  onClick={this.props.handleItemClick}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            as={Link}
            to="/history"
            name="History"
            active={activeItem === "History"}
            onClick={this.props.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              {activeItem === "Clients" && (
                <Input
                  icon="search"
                  placeholder="Search..."
                  name="search"
                  value={this.props.search}
                  onChange={this.props.searchClientsHandleChange}
                />
              )}
              {activeItem === "History" && (
                <Input
                  icon="search"
                  placeholder="Search..."
                  name="search"
                  value={this.props.search}
                  onChange={this.props.searchHistoryHandleChange}
                />
              )}
            </Menu.Item>
            <Dropdown item text="Account">
              <Dropdown.Menu>
                {!window.localStorage.getItem("username") ? (
                  <Dropdown.Item>
                    <Menu.Item
                      as={Link}
                      to="/Login"
                      name="Login"
                      active={activeItem === "Login"}
                      onClick={this.handleItemClick}
                    />
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item>
                    <Menu.Item
                      as={Link}
                      to="/"
                      name="logout"
                      active={activeItem === "Home"}
                      onClick={this.props.handleClickLogout}
                    />
                  </Dropdown.Item>
                )}
                <Dropdown.Item>
                  <Menu.Item
                    as={Link}
                    to="/signup"
                    name="Signup"
                    active={activeItem === "Signup"}
                    onClick={this.handleItemClick}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default CustomNav;
