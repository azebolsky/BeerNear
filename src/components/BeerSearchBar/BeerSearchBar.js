import React, { Component } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";
import BeerSearchResults from "../BeerSearchResults/BeerSearchResults";
import Pagination from "../Pagination/Pagination";
import './BeerSearchBar.css';

class BeerSearchBar extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
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
      <div ref={this.wrapper} className="Search-Container">
        <Grid className="center aligned">
          <Grid.Column>
            <Segment className="SearchSegment">
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
                <button type="submit">Click to View All Beers or Search</button>
              </form>
            </Segment>
          </Grid.Column>
        </Grid>
        <BeerSearchResults
          searchBeerResults={this.props.searchBeerResults}
          beers={this.props.beers}
          handleFavAddButtonClick={this.props.handleFavAddButtonClick}
          favBeers={this.props.favBeers}
          handleDeleteFavorite={this.props.handleDeleteFavorite}
        />
        <Pagination
          numberOfPages={this.props.numberOfPages}
          currentPage={this.props.currentPage}
          handlePageClick={this.props.handlePageClick}
          loading={this.props.loading}
          searchBeerResults={this.props.searchBeerResults}
        />
      </div>
    );
  }
}

export default BeerSearchBar;
