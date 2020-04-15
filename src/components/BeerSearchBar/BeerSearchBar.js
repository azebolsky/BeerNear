import React, { Component } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";
import BeerSearchResults from "../BeerSearchResults/BeerSearchResults";

class BeerSearchBar extends Component {
  constructor() {
    super();
    this.state = {
      invalidForm: true,
      formData: {
        beerName: "",
      },
    };
  }

  formRef = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.getBeerResults(this.state.formData.beerName);
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
              <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <Form.Input>
                  <input
                    type="text"
                    value={this.state.formData.beerName}
                    name="beerName"
                    onChange={this.handleChange}
                  />
                </Form.Input>
                <button type="submit" disabled={this.state.invalidForm}>
                  Search
                </button>
              </form>
            </Segment>
          </Grid.Column>
        </Grid>
        <BeerSearchResults
          searchBeerResults={this.props.searchBeerResults}
          beers={this.props.beers}
        />
      </>
    );
  }
}

export default BeerSearchBar;
