import React, { Component } from "react";

class EditPost extends Component {
  state = {};
  render() {
    console.log("edit page props", this.props);
    const {
      petInfo,
      submitingEditPet,
      breeds,
      petInfoInputChange,
      petBreedOnChange,
    } = this.props;
    return (
      <div>
        <form
          className="needs-validation"
          noValidate
          onSubmit={submitingEditPet}
        >
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationCustom01">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={petInfo.name}
                onChange={petInfoInputChange}
                required
              ></input>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="dropdown mt-4">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.props.breedName === "" ? "Breed" : this.props.breedName}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {breeds.map((breed) => (
                    <a
                      className="dropdown-item"
                      onClick={() => petBreedOnChange(breed)}
                      id={breed.id}
                      key={breed.id}
                    >
                      {breed.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationCustom03">Color</label>
              <input
                type="text"
                className="form-control"
                onChange={petInfoInputChange}
                id="color"
                name="color"
                value={petInfo.color}
                required
              ></input>
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationCustom05">special concerns</label>
              <input
                type="text"
                className="form-control"
                name="specialconcerns"
                onChange={petInfoInputChange}
                value={petInfo.specialconcerns}
                id="specialconcerns"
                required
              ></input>
              <div className="invalid-feedback">
                Please provide a corncerns.
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={petInfo.rabies}
                id="invalidCheck"
                required
              ></input>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default EditPost;
