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


  componentDidMount() {
    API.searchEmployee()
      .then(res => this.setState({ employee: res.data.results }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    // this.setState({ search: event.target.value });
    const filter = event.target.value
    const filteredList = this.state.employee.filter(item => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !==-1
    });
    this.setState({employee: filteredList})
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
    // const { search, employee } = this.state;
    // const lowercasedFilter = search.toLowerCase();
    // const filteredData = employee.filter(item => {
     
    // });

    return (
      <div>
        <Container style={{ minHeight: "80%", maxWidth: "80%" }}>
          <h1 className="text-center">Search an Employee!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employee={this.state.employee}
          />
          {this.state.employee ? (

            <SearchResults

              results={this.state.employee}

            />
          ) : (
            <h3> No Results to Display</h3>
          )}
        </Container>
      </div>
    );
  }
}

export default Search;
