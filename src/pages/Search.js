import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    employee: [],
    error: ""
  };

  // // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.search()
  //     .then(res => this.setState({ results: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });3
  // };


componentDidMount() {
  API.searchEmployee()
  .then(res => this.setState({employee: res.data.results}))
  .catch(err =>console.log(err))
}

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchEmployee(this.state.search)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.results);
      }
      this.setState({ employee: res.data.results, error: "" });
    })
    .catch(err => this.setState({ error: err.results }));
  }
    
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search an Employee!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employee={this.state.employee}
          />
          <SearchResults results={this.state.employee} />
        </Container>
      </div>
    );
  }
}

export default Search;
