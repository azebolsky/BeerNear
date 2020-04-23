import React, { Component } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import BeerSearchResults from "../BeerSearchResults/BeerSearchResults";
import './BeerSearchBar.css';
import Pagination from "../Pagination/Pagination";

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
    });
  };

  render() {
    return (
      <div ref={this.wrapper}>
        <Grid className="center aligned" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: "450" }}>
            <h1 className="Search-Header">Search Beer Here</h1>
            <div className="ui two column centered grid">
              <Form ref={this.formRef} onSubmit={this.handleSubmit}>
                <Form.Input
                  type="text"
                  value={this.state.formData.beerName}
                  name="beerName"
                  placeholder="Search"
                  onChange={this.handleChange}
                />
                <Button
                  className="ui positive button" type="submit" style={{ marginBottom: "20px", fontSize: "15px" }}>
                  Click to View All Beers or Search
              </Button>
              </Form>
            </div>
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