import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createUser } from "../services/api-service";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      ci: "",
      phone: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  createUser = () => {
    createUser(this.state).then((data) => {
      if (!data.data.errors) {
        alert("save sussesfull");
      } else {
        alert("error, please check the data");
      }
    });
  };

  formStyle = {
    marginTop: "3em",
    display: "grid",
    justifyContent: "center",
  };
  formInputStyle = {
    marginTop: "3em",
  };
  render() {
    return (
      <div>
        <h2>New user</h2>
        <div id="form" style={this.formStyle}>
          <div style={this.formInputStyle}>
            <span className="p-float-label">
              <InputText
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              <label>First name</label>
            </span>
          </div>
          <div style={this.formInputStyle}>
            <span className="p-float-label">
              <InputText
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
              <label>Last name</label>
            </span>
          </div>
          <div style={this.formInputStyle}>
            <span className="p-float-label">
              <InputText
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                type="email"
              />
              <label>Email</label>
            </span>
          </div>
          <div style={this.formInputStyle}>
            <span className="p-float-label">
              <InputText
                name="ci"
                value={this.state.ci}
                type="number"
                onChange={this.handleInputChange}
              />
              <label>ci</label>
            </span>
          </div>
          <div style={this.formInputStyle}>
            <span className="p-float-label">
              <InputText
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
              <label>phone</label>
            </span>
          </div>
        </div>
        <div style={this.formStyle}>
          <Button label="Save" onClick={this.createUser} />
        </div>
      </div>
    );
  }
}

export default UserForm;
