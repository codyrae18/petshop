import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import FormApplication from "./components/FormApplication";
import CustomNav from "./components/CustomNav";
import Current from "./components/Current";
import Client from "./components/Client";
import SignUp from "./components/SignUp";
import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    accounts: {
      username: "",
      password: "",
    },
    clientInfo: {
      firstname: "",
      lastname: "",
      homephone: "",
      workphone: "",
    },
    clients: "",
  };

  componentDidMount() {
    this.testFetch();
  }

  testFetch = () => {
    console.log("test hit!!");
    fetch(`http://localhost:3000/clients`)
      .then((resp) => resp.json())
      .then((clients) => {
        console.log("here is the result", clients);
        this.setState({
          clients,
        });
      });
  };

  handleLoginChange = (event) => {
    const login = { ...this.state.login };
    login[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ login });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { accounts } = this.state;

    fetch("https://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          name: accounts.name,
          username: accounts.username,
          password: accounts.password,
        },
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("succesfully created an account", r);
      });
  };

  handleChange = (event) => {
    const accounts = { ...this.state.accounts };
    accounts[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ accounts });
  };

  formHandleChange = (event) => {
    const clientInfo = { ...this.state.clientInfo };
    clientInfo[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ clientInfo });
  };

  handleClick = (event) => {
    console.log("login", this.state.login);

    // console.log("thiis hits", event);
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: this.state.login.username,
          password: this.state.login.password,
        },
      }),
    };
    fetch(`http://localhost:3000/login`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        // console.log("json", json);
        if (!json.hasOwnProperty("error")) {
          window.localStorage.setItem("token", json.jwt);
          window.localStorage.setItem("username", json.user.username);
          window.localStorage.setItem("userId", `${json.user.id}`);
          // window.location.assign("http://localhost:3000/users");
          this.setState({ current_user: json.user });
          // console.log("fetching", json);
        } else {
          this.setState({ error: json.error });
        }
      })
      .then((data) => {
        const localUserId = localStorage.getItem("userId");

        if (localUserId) {
          this.fetchCurrentUser(localUserId);
        }
      })
      .catch((error) => console.log("username or password did not match"));
    this.setState({
      username: "",
      password: "",
    });

    this.props.history.push("/");
  };

  addingUser = (event) => {
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: "",
          password: "",
        },
      }),
    };
    fetch(`http://localhost:3000/api/login`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("json", json);
      });
  };

  addingClient = (event) => {
    event.preventDefault();
    const { clientInfo } = this.state;
    fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client: {
          lastname: clientInfo.lastname,
          firstname: clientInfo.lastname,
          homephone: clientInfo.homephone,
          workphone: clientInfo.workphone,
        },
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log("successfully created an account", r);
      });
  };

  render() {
    // console.log("clients -> state", this.state.clients);

    return (
      <Fragment>
        <div>
          <CustomNav />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/form"
              render={() => (
                <FormApplication
                  addingClient={this.addingClient}
                  clientInfo={this.state.clientInfo}
                  formHandleChange={this.formHandleChange}
                />
              )}
            />
            <Route exact path="/current" render={() => <Current />} />
            <Route exact path="/client" render={() => <Client />} />
            <Route exact path="/customnav" render={() => <CustomNav />} />
            <Route
              exact
              path="/signup"
              render={() => (
                <SignUp
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  accounts={this.state.accounts}
                  addingUser={this.addingUser}
                />
              )}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
