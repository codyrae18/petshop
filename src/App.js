import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import FormApplication from "./components/FormApplication";
import CustomNav from "./components/CustomNav";
import Current from "./components/Current";
import Client from "./components/Client";
import SignUp from "./components/SignUp";
import AddDog from "./components/AddDog";
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
    dogInfo: {
      name: "",
      color: "",
      specialconcerns: "",
      rabies: "",
    },
    clients: "",
    breeds: "",
  };

  componentWillMount() {
    this.testFetch();
    this.fetchingAllBreed();
  }

  testFetch = () => {
    fetch(`http://localhost:3000/clients`)
      .then((resp) => resp.json())
      .then((clients) => {
        this.setState({
          clients,
        });
      });
  };

  fetchingAllBreed = () => {
    fetch(`http://localhost:3000/breeds`)
      .then((resp) => resp.json())
      .then((breeds) => {
        console.log(breeds);
        this.setState({
          breeds,
        });
      });
  };

  handleLoginChange = (event) => {
    const login = { ...this.state.login };
    login[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ login });
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

  addingDogToAClient = (event) => {
    this.props.history.push("/adddog");
  };

  addingDogFormChange = (event) => {
    console.log("yo", event);
    const dogInfo = { ...this.state.dogInfo };
    dogInfo[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ dogInfo });
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
          username: this.state.accounts.username,
          password_digest: this.state.accounts.password,
        },
      }),
    };
    fetch(`http://localhost:3000/signup`, configObj)
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
          firstname: clientInfo.firstname,
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
    console.log("breeds -> state", this.state.breeds);

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
            <Route
              exact
              path="/client"
              render={() => (
                <Client
                  clients={this.state.clients}
                  addingDogToAClient={this.addingDogToAClient}
                />
              )}
            />
            <Route exact path="/customnav" render={() => <CustomNav />} />
            <Route
              exact
              path="/signup"
              render={() => (
                <SignUp
                  handleChange={this.handleChange}
                  accounts={this.state.accounts}
                  addingUser={this.addingUser}
                />
              )}
            />
            <AddDog
              dogInfo={this.state.dogInfo}
              addingDogFormChange={this.addingDogFormChange}
              breeds={this.state.breeds}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
