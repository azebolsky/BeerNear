import React, { Component } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";

class BeerSearch extends Component {
  state = {
    invalidForm: true,
    formData: {
      beerName: "",
    },
  };

  formRef = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();
  };

  handleChange = (evt) => {
    const formData = {
      ...this.state.formData,
      [evt.target.name]: evt.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <Grid className="center aligned">
          <Grid.Column>
            <Segment>
              <h1>Search Beer Here</h1>
              <form
                ref={this.formRef}
                autoComplete="off"
                onSubmit={this.handleSubmit}
              >
                <Form.Field>
                  <input
                    type="text"
                    value={this.state.formData.beerName}
                    name="beerName"
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <button type="submit" disabled={this.state.invalidForm}>
                  Search
                </button>
              </form>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default BeerSearch;
