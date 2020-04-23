import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
import { Grid, Form, Button } from "semantic-ui-react";
import './SignupForm.css'

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (evt) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(`this is the error: ${err}`);
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <Grid textAlign="center" style={{ height: "40vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: "450" }}>
          <h2 className="Login-Header">Sign Up</h2>
          <div className="ui two column centered grid">
            <Form style={{ width: "400px", fontSize: "15px" }} onSubmit={this.handleSubmit}>
              <Form.Input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
              <Form.Input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <Form.Input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
              <Form.Input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
              <div className="Login-Buttons">
                <Button
                  fluid
                  className="ui positive button"
                  style={{ fontSize: "15px", fontWeight: "bolder" }}
                  disabled={this.isFormInvalid()}
                >
                  Sign Up
                  </Button>
                &nbsp;
                  <Link to="/" className="cancel-link">Cancel</Link>
              </div>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupForm;
