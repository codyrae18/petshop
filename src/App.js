import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import FormApplication from "./components/FormApplication";
import CustomNav from "./components/CustomNav";
import Current from "./components/Current";
import Client from "./components/Client";
import SignUp from "./components/SignUp";
import AddPet from "./components/AddPet";
import PetList from "./components/PetList";
import EditPet from "./components/EditPet";
import EditClient from "./components/EditClient";
import History from "./components/History";
import Login from "./components/Login";
import ServiceNew from "./components/ServiceNew";
import _ from "lodash";

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
    petInfo: {
      name: "",
      color: "",
      specialconcerns: "",
      rabies: "",
    },
    clients: "",
    filteredClients: [],
    filteredPets: [],
    client_id: "",
    clientName: "",
    breedId: "",
    breedName: "",
    clientPets: "",
    services: "",
    serviceId: "",
    breeds: "",
    clientIdOnSelect: "",
    pets: "",
    petIdOnSelect: "",
    appointments: "",

    activeItem: "Home",
    activeItemHome: "Quick Check In",

    isLoading: false,
    results: "",
    value: "",
    checkedIn: "",
    search: "",
    serviceNewValue: "",
    curTime: "",
  };

  componentDidMount() {
    this.fetchingAllClients();
    this.fetchingAllAppointments();
    this.fetchingAllBreed();
    this.fetchingAllPets();
    this.fetchingAllServices();

    this.setState({
      curTime: new Date().toLocaleDateString(),
    });
  }

  fetchingAllClients = () => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    fetch(`https://k9-petshop.herokuapp.com/clients`, configObj)
      .then((resp) => resp.json())
      .then((clients) => {
        console.log("hi this is from the heroku", clients);
        this.setState({
          clients: clients,
          filteredClients: clients,
        });
      });
  };

  fetchingAllBreed = () => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    fetch(`https://k9-petshop.herokuapp.com/breeds`, configObj)
      .then((resp) => resp.json())
      .then((breeds) => {
        this.setState({
          breeds,
        });
      });
  };

  fetchingAllServices = () => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    fetch(`https://k9-petshop.herokuapp.com/services`, configObj)
      .then((resp) => resp.json())
      .then((services) => {
        this.setState({
          services,
        });
      });
  };

  fetchingAllPets = () => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    fetch(`https://k9-petshop.herokuapp.com/pets`, configObj)
      .then((resp) => resp.json())
      .then((pets) => {
        this.setState({
          pets: pets,
          filteredPets: pets,
        });
      });
  };

  fetchingAllAppointments = () => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    fetch(`https://k9-petshop.herokuapp.com/appointments`, configObj)
      .then((resp) => resp.json())
      .then((appointments) => {
        this.setState({
          appointments,
        });
      });
  };

  submitingPet = (event) => {
    this.props.history.push("pet");
    const { petInfo, breedId, client_id } = this.state;
    console.log("pet info----> ", petInfo);
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        pet: {
          name: petInfo.name,
          color: petInfo.color,
          specialconcerns: petInfo.specialconcerns,
          rabies: petInfo.rabies,
          breed_id: breedId,
          client_id: client_id,
        },
      }),
    };
    fetch(`https://k9-petshop.herokuapp.com/pets`, configObj)
      .then((resp) => resp.json())
      .then((pet) => {
        this.setState({
          petInfo: {
            name: "",
            color: "",
            specialconcerns: "",
            rabies: "",
          },
        });
        const client_id = this.state.client_id;
        this.fetchingClientPets(client_id);
        this.fetchingAllPets();
      });
  };

  submitingEditPet = (event) => {
    event.preventDefault();
    const { petInfo, client_id, breedId } = this.state;
    const petId = petInfo.id;
    const configObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        pet: {
          name: petInfo.name,
          color: petInfo.color,
          specialconcerns: petInfo.specialconcerns,
          rabies: petInfo.rabies,
          breed_id: breedId,
          client_id: client_id,
        },
      }),
    };
    fetch(`https://k9-petshop.herokuapp.com/pets/${petId}`, configObj)
      .then((resp) => resp.json())
      .then((pet) => {
        console.log(pet);
        this.fetchingClientPets(client_id);
        this.setState({
          petInfo: {
            name: "",
            color: "",
            specialconcerns: "",
            rabies: "",
          },
        });
      });
    this.props.history.push("/pet");
  };
  petBreedOnChange = (breed) => {
    const breedId = breed.id;
    const breedName = breed.name;
    this.setState({ breedId });
    this.setState({ breedName });
  };

  submitingEditClient = (event) => {
    event.preventDefault();
    const { clientInfo, client_id } = this.state;
    const c_id = clientInfo.id;
    const configObj = {
      method: "PUT",
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
    };
    fetch(`https://k9-petshop.herokuapp.com/clients/${c_id}`, configObj)
      .then((resp) => resp.json())
      .then((pet) => {
        console.log(pet);
        this.fetchingClientPets(client_id);
        this.setState({
          clientInfo: {
            firstname: "",
            lastname: "",
            homephone: "",
            workphone: "",
          },
        });
        this.fetchingAllClients();
      });
    this.props.history.push("/client");
  };
  petBreedOnChange = (e, breed) => {
    console.log("breed change", breed.value);
    const breedId = breed.value;
    const breedName = breed.name;
    this.setState({ breedId });
    this.setState({ breedName });
  };

  petInfoInputChange = (event) => {
    const petInfo = { ...this.state.petInfo };
    petInfo[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ petInfo });
  };

  handleLoginChange = (e, data) => {
    const login = { ...this.state.login };
    login[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ login });
  };

  handleChange = (event) => {
    const accounts = { ...this.state.accounts };
    accounts[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ accounts });
  };

  handleChangeServiceNew = (event) => {
    const serviceNewValue = { ...this.state.serviceNewValue };
    serviceNewValue[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ serviceNewValue });
  };

  addingNewService = (event, data) => {
    event.preventDefault();

    const { serviceNewValue } = this.state;
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        service: {
          name: serviceNewValue.name,
        },
      }),
    };
    fetch(`https://k9-petshop.herokuapp.com/services`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("json", json);
        this.props.history.push("/");
        this.fetchingAllServices();
        this.setState({
          serviceNewValue: {
            name: "",
          },
        });
      });
  };

  formHandleChange = (event) => {
    const clientInfo = { ...this.state.clientInfo };
    clientInfo[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ clientInfo });
  };

  handleClick = (event) => {
    const { login } = this.state;
    console.log(login);
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: login.username,
          password: login.password,
        },
      }),
    };
    fetch(`https://k9-petshop.herokuapp.com/api/login`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("json", json);
        if (!json.hasOwnProperty("error")) {
          console.log("hey");
          window.localStorage.setItem("token", json.jwt);
          window.localStorage.setItem("username", json.user.username);
          window.localStorage.setItem("userId", `${json.user.id}`);
          // window.location.assign("https://k9-petshop.herokuapp.com/users");
          this.setState({ current_user: json.user });
          // console.log("fetching", json);
        } else {
          this.setState({ error: json.error });
        }
      });
    this.setState({
      username: "",
      password: "",
    });
    this.fetchingAllServices();
    this.props.history.push("/");
  };

  fetchingClientPets = (client_id) => {
    console.log("client info");
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    fetch(`https://k9-petshop.herokuapp.com/clients/${client_id}`, configObj)
      .then((resp) => resp.json())
      .then((pets) => {
        console.log("my response", pets);
        this.setState({
          clientPets: pets,
        });
      });
  };

  addingPetToAClient = (client) => {
    const client_id = client.id;
    this.fetchingClientPets(client_id);
    this.setState({ client_id });
    this.setState({ clientName: client.firstname });
    this.props.history.push("/addPet");
  };

  addingUser = (event, data) => {
    event.preventDefault();
    const { accounts } = this.state;
    console.log("accounts", accounts);
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: accounts.username,
          password: accounts.password,
        },
      }),
    };
    fetch(`https://k9-petshop.herokuapp.com/api/users`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        console.log("json", json);
      });
    this.props.history.push("/");
  };

  clientPetOnClick = (client) => {
    const client_id = client.id;
    this.fetchingClientPets(client_id);
    this.setState({ client_id });
    this.setState({ clientName: client.firstname });
    this.props.history.push("/pet");
  };

  petOnClickDelete = (pet) => {
    console.log("delete");
    const petId = pet.id;
    const pets = this.state.clientPets.filter((d) => d.id !== petId);
    this.setState({ clientPets: pets });
    fetch(`https://k9-petshop.herokuapp.com/pets/${petId}`, {
      method: "DELETE",
    });
    this.fetchingAllPets();
  };

  serviceOnClickDelete = (service) => {
    console.log("service", service.id);
    const serviceId = service.id;
    const services = this.state.services.filter((d) => d.id !== serviceId);
    console.log(services);
    this.setState({ services });
    fetch(`https://k9-petshop.herokuapp.com/services/${serviceId}`, {
      method: "DELETE",
    });
    this.fetchingAllServices();
  };

  deleteClientHandleClick = (client) => {
    const clientId = client.id;
    const clients = this.state.clients.filter((c) => c.id !== clientId);
    this.setState({ clients });
    fetch(`https://k9-petshop.herokuapp.com/clients/${clientId}`, {
      method: "DELETE",
    });
    this.fetchingAllClients();
  };

  petOnClickEdit = (pet) => {
    this.setState({ petInfo: pet });
    this.props.history.push("/editPet");
  };

  addingClient = (event) => {
    event.preventDefault();
    const { clientInfo } = this.state;
    fetch("https://k9-petshop.herokuapp.com/clients", {
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
        this.setState({
          clientInfo: {
            firstname: "",
            lastname: "",
            homephone: "",
            workphone: "",
          },
        });
        this.fetchingAllClients();
      });
    this.props.history.push("/client");
  };

  clientOnClickEdit = (clientInfo) => {
    this.setState({ clientInfo });
    this.props.history.push("/editclient");
  };

  servicesOnClick = (e, service) => {
    console.log(e);
    console.log("service => ", service.value);

    const serviceId = service.value;
    this.setState({ serviceId });
  };

  selectPetOnClick = (e, pet) => {
    console.log("pet -> ", pet.value);

    const petIdOnSelect = pet.value;
    this.setState({ petIdOnSelect });
  };

  checkIn = (event) => {
    event.preventDefault();
    console.log("event", event);
    fetch("https://k9-petshop.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        appointment: {
          pet_id: this.state.petIdOnSelect,
          service_id: this.state.serviceId,
          date: this.state.curTime,
        },
      }),
    })
      .then((r) => r.json())
      .then((appointments) => {
        console.log("after submitting", appointments);
        this.setState({
          appointments: [...this.state.appointments, appointments],
          activeItemHome: "Checked In",
        });
        console.log("after setting state", this.state.appointments);
        this.fetchingAllAppointments();
        this.fetchingAllPets();
      });
  };

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({ isLoading: false, results: "", value: "" });

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.pets, isMatch),
      });
    }, 300);
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    if (name === "History") {
      this.fetchingAllPets();
    }
  };

  handleItemClickHome = (e, { name }) =>
    this.setState({ activeItemHome: name });

  finishOnClick = (data) => {
    console.log("data on click", data);
    const configObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        appointment: {
          appointment_id: data.appointmentId,
        },
      }),
    };
    fetch(
      `https://k9-petshop.herokuapp.com/appointments/${data.appointmentId}`,
      configObj
    )
      .then((resp) => resp.json())
      .then((a) => {
        console.log(a);
        this.fetchingAllAppointments();
      });
  };

  searchClientsHandleChange = (input, e) => {
    console.log("input", input);
    console.log("e", e);

    this.setState({ search: input.target.value });

    const lowercasedSearchInput = this.state.search.toLowerCase();
    console.log("lower case search input", lowercasedSearchInput);

    const searchResults = this.state.clients.filter((client) => {
      let lowercasedClient = client.firstname.toLowerCase();
      return lowercasedClient.includes(lowercasedSearchInput);
    });
    console.log("search results", searchResults);

    this.setState({
      filteredClients: searchResults,
    });

    if (input.nativeEvent.inputType === "deleteContentBackward") {
      this.fetchingAllClients();
    }
  };

  searchHistoryHandleChange = (input, e) => {
    this.setState({ search: input.target.value });

    const lowercasedSearchInput = this.state.search.toLowerCase();
    console.log("lower case search input", lowercasedSearchInput);

    const searchResults = this.state.pets.filter((pet) => {
      let lowercasedPet = pet.name.toLowerCase();
      return lowercasedPet.includes(lowercasedSearchInput);
    });
    console.log("search results", searchResults);

    this.setState({
      filteredPets: searchResults,
    });

    if (input.nativeEvent.inputType === "deleteContentBackward") {
      this.fetchingAllPets();
    }
  };

  handleClickLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    console.log("pets", this.state.pets);
    return (
      <Fragment>
        <div class="ui huge header center aligned blue">
          K9 Grooming
          <div class="sub header">
            Manage your account settings and set e-mail preferences.
          </div>
        </div>
        <div>
          <CustomNav
            handleItemClick={this.handleItemClick}
            activeItem={this.state.activeItem}
            searchClientsHandleChange={this.searchClientsHandleChange}
            searchHistoryHandleChange={this.searchHistoryHandleChange}
            handleClickLogout={this.handleClickLogout}
          />
        </div>
        <div class="ui segment">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  activeItemHome={this.state.activeItemHome}
                  finishOnClick={this.finishOnClick}
                  handleItemClickHome={this.handleItemClickHome}
                  services={this.state.services}
                  servicesOnClick={this.servicesOnClick}
                  selectPetOnClick={this.selectPetOnClick}
                  pets={this.state.pets}
                  checkIn={this.checkIn}
                  appointments={this.state.appointments}
                  handleResultSelect={this.handleResultSelect}
                  handleSearchChange={this.handleSearchChange}
                  isLoading={this.state.isLoading}
                  results={this.state.results}
                  value={this.state.value}
                />
              )}
            />
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
            <Route
              exact
              path="/history"
              render={() => (
                <History
                  pets={this.state.filteredPets}
                  appointments={this.state.appointments}
                  services={this.state.services}
                />
              )}
            />
            <Route
              exact
              path="/services/new"
              render={() => (
                <ServiceNew
                  serviceNew={this.state.serviceNewValue}
                  handleChangeServiceNew={this.handleChangeServiceNew}
                  addingNewService={this.addingNewService}
                  services={this.state.services}
                  serviceOnClickDelete={this.serviceOnClickDelete}
                />
              )}
            />
            <Route exact path="/current" render={() => <Current />} />
            <Route
              exact
              path="/client"
              render={() => (
                <Client
                  deleteClientHandleClick={this.deleteClientHandleClick}
                  filteredClients={this.state.filteredClients}
                  clients={this.state.clients}
                  addingPetToAClient={this.addingPetToAClient}
                  clientOnClickEdit={this.clientOnClickEdit}
                  clientPetOnClick={this.clientPetOnClick}
                  clientPets={this.state.clientPets}
                />
              )}
            />
            <Route
              exact
              path="/customnav"
              render={() => (
                <CustomNav
                  handleItemClick={this.handleItemClick}
                  search={this.state.search}
                  activeItem={this.state.activeItem}
                />
              )}
            />
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
            <Route
              exact
              path="/addPet"
              render={() => (
                <AddPet
                  petOnClickEdit={this.petOnClickEdit}
                  petInfo={this.state.petInfo}
                  breeds={this.state.breeds}
                  submitingPet={this.submitingPet}
                  petInfoInputChange={this.petInfoInputChange}
                  clientPets={this.state.clientPets}
                  petBreedOnChange={this.petBreedOnChange}
                  breedName={this.state.breedName}
                />
              )}
            />
            <Route
              exact
              path="/editPet"
              render={() => (
                <EditPet
                  petInfo={this.state.petInfo}
                  breeds={this.state.breeds}
                  submitingEditPet={this.submitingEditPet}
                  petInfoInputChange={this.petInfoInputChange}
                  clientPets={this.state.clientPets}
                  petBreedOnChange={this.petBreedOnChange}
                  breedName={this.state.breedName}
                />
              )}
            />
            <Route
              exact
              path="/editclient"
              render={() => (
                <EditClient
                  submitingEditClient={this.submitingEditClient}
                  clientInfo={this.state.clientInfo}
                  formHandleChange={this.formHandleChange}
                />
              )}
            />
            <Route
              exact
              path="/pet"
              render={() => (
                <PetList
                  clientPets={this.state.clientPets}
                  clientName={this.state.clientName}
                  petOnClickDelete={this.petOnClickDelete}
                  petOnClickEdit={this.petOnClickEdit}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLoginChange={this.handleLoginChange}
                  handleClick={this.handleClick}
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
