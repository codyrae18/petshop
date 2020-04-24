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
    client_id: "",
    breedId: "",
    breedName: "",
    clientDogs: "",
  };

  componentDidMount() {
    this.fetchingAllClients();
    this.fetchingAllBreed();
  }

  fetchingAllClients = () => {
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
        this.setState({
          breeds,
        });
      });
  };

  submitingDog = (event) => {
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        dog: {
          name: this.state.dogInfo.name,
          color: this.state.dogInfo.color,
          specialconcerns: this.state.dogInfo.specialconcerns,
          rabies: this.state.dogInfo.rabies,
          breed_id: this.state.breedId,
          client_id: this.state.client_id,
        },
      }),
    };
    fetch(`http://localhost:3000/dogs`, configObj)
      .then((resp) => resp.json())
      .then((dog) => {
        this.setState({
          dogInfo: {
            name: "",
            color: "",
            specialconcerns: "",
            rabies: "",
          },
        });
        const client_id = this.state.client_id;
        this.fetchingClientDogs(client_id);
      });
  };

  dogBreedOnChange = (breed) => {
    console.log("dog info:", breed);
    const breedId = breed.id;
    const breedName = breed.name;
    this.setState({ breedId });
    this.setState({ breedName });
  };

  dogInfoInputChange = (event) => {
    const dogInfo = { ...this.state.dogInfo };
    dogInfo[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ dogInfo });
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

  fetchingClientDogs = (client_id) => {
    this.setState({ client_id });
    fetch(`http://localhost:3000/clients/${client_id}`)
      .then((resp) => resp.json())
      .then((dogs) => {
        console.log("my response", dogs);
        this.setState({
          clientDogs: dogs,
        });
      });
  };

  addingDogToAClient = (client) => {
    const client_id = client.id;
    this.fetchingClientDogs(client_id);
    this.setState({ client_id });
    this.props.history.push("/adddog");
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

  dogOnClickDelete = (dog) => {
    console.log("dog info", dog);
    const dogId = dog.id;
    const dogs = this.state.clientDogs.filter((d) => d.id !== dogId);
    this.setState({ clientDogs: dogs });
    fetch(`http://localhost:3000/dogs/${dogId}`, {
      method: "DELETE",
    });
  };

  deleteDogHandleClick = (client) => {
    console.log("delete click", client);
    const clientId = client.id;
    const clients = this.state.clients.filter((c) => c.id !== clientId);
    this.setState({ clients });
    fetch(`http://localhost:3000/clients/${clientId}`, {
      method: "DELETE",
    });
  };

  dogOnClickEdit = (dog) => {};

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
      .then((client) => {
        console.log("after submitting", client);
        this.fetchingAllClients();
      });
    this.props.history.push("/client");
  };

  render() {
    console.log("my clients", this.state.clients);
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
                  deleteDogHandleClick={this.deleteDogHandleClick}
                  clients={this.state.clients}
                  addingDogToAClient={this.addingDogToAClient}
                  clientDogs={this.state.clientDogs}
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
              dogOnClickDelete={this.dogOnClickDelete}
              dogOnClickEdit={this.dogOnClickEdit}
              dogInfo={this.state.dogInfo}
              breeds={this.state.breeds}
              submitingDog={this.submitingDog}
              dogInfoInputChange={this.dogInfoInputChange}
              clientDogs={this.state.clientDogs}
              dogBreedOnChange={this.dogBreedOnChange}
              breedName={this.state.breedName}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
