import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container/index";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResults/index";

class Search extends Component {

  
  
  state = {
    search: "",
    employee: [],
    sortType: "asc",
    error: ""
  };

  // filterList = (event) => {
  //   let items = this.state.search;
  //   items = items.filter((item) => {
  //     return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1; 
  //   })
  //   this.setState({items: items})

  // }


  componentDidMount() {
    API.searchEmployee()
      .then(res => this.setState({ 
        search: res.data.results,
        employee: res.data.results }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    // this.setState({ search: event.target.value });





    const filter = event.target.value
    console.log(filter)
    const filteredList = this.state.employee.filter(item => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !==-1
    });
    this.setState({employee: filteredList})

    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchEmployee()
      .then(res => { this.setState({
        search: res.data.results,
        employee: res.data.results })

      })

        // if (res.data.status === "error") {
        //   throw new Error(res.data.results);
        // }
        // this.setState({ employee: res.data.results, error: "" });
      
      .catch(err => this.setState({ error: err.results }));
  }



  sortList = (cell) => {

    let setList;


    if ((cell === "first") || (cell ==="last")) {
      if(this.state.sortType === "asc"){
        setList = this.state.employee.sort((a,b) => {
          return a.name[cell].localeCompare(b.name[cell])
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.employee.sort((a,b)=> {
          return b.name[cell].localeCompare(a.name[cell])
        })
      }
    }


    else if (cell === "email"){
      if(this.state.sortType === "asc"){
        setList = this.state.employee.sort((a,b) => {
          return a.email.localeCompare(b.email)
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.employee.sort((a,b)=> {
          return b.email.localeCompare(a.email)
        })
      }
    }


    else if ((cell === "city") || (cell ==="country")){
      if(this.state.sortType === "asc"){
        setList = this.state.employee.sort((a,b) => {
          return a.location[cell].localeCompare(b.location[cell])
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.employee.sort((a,b)=> {
          return b.location[cell].localeCompare(a.location[cell])
        })
      }
    }



    else if ((cell === "cell")||(cell ==="phone")){
      if(this.state.sortType === "asc"){
        setList = this.state.employee.sort((a,b) => {
          return a.cell.localeCompare(b.cell)
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.employee.sort((a,b)=> {
          return b.cell.localeCompare(a.cell)
        })
      }
    }

    if (cell === "gender"){
      if(this.state.sortType === "asc"){
        setList = this.state.employee.sort((a,b) => {
          return a.gender.localeCompare(b.gender)
        })
        this.setState({sortType : "des"})
      } else {
        // eslint-disable-next-line
        setList = this.state.employee.sort((a,b)=> {
          return b.gender.localeCompare(a.gender)
        })
      }
    }
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
            // employee={this.state.employee}
          />

          {this.state.employee ? (

            <SearchResults
              results={this.state.employee}
              sortList = {this.sortList}

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
