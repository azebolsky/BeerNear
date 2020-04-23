import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
import { Grid, Form, Button } from "semantic-ui-react";
import './LoginPage.css'

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: "40vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: "450" }}>
          <h2 className="Login-Header">Log In Below</h2>
          <div className="ui two column centered grid">
            <Form style={{ width: "400px", fontSize: "15px" }} onSubmit={this.handleSubmit}>
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
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
              <div className="Login-Buttons">
                <Button
                  fluid
                  className="ui positive button"
                  style={{ fontSize: "15px", fontWeight: "bolder" }}>
                  Cheers!
                </Button>
                &nbsp;
                <Link to="/" className="cancel-link">
                  Cancel
                </Link>
              </div>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginPage;
