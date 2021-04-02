import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container/index";
import SearchForm from "../components/SearchForm/index";
import SearchResults from "../components/SearchResults/index";

class Search extends Component {

  
  
  state = {
    search: "",
    filteredSearch:[],
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
        filteredSearch: res.data.results,
        employee: res.data.results }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    // this.setState({ search: event.target.value })
    // const filter = event.target.value
    // console.log(filter)
    // const filteredList = this.state.employee.filter(item => {
    //   let values = Object.values(item).join("").toLowerCase();
    //   return values.indexOf(filter.toLowerCase()) !==-1
    // });
    // this.setState({employee: filteredList})

    if (event) {
      let filter = (event.target.value).toLowerCase()
      const filteredList = this.state.employee.filter(message => {
        return(message.name.first.toLowerCase().indexOf(filter) !==-1)
        ||(message.name.last.toLowerCase().indexOf(filter) !==-1)
        ||(message.email.toLowerCase().indexOf(filter) !==-1)
        ||(message.location.city.toLowerCase().indexOf(filter) !==-1)
        ||(message.location.country.toLowerCase().indexOf(filter) !==-1)
        ||(message.cell.toLowerCase().indexOf(filter) !==-1)
        ||(message.phone.toLowerCase().indexOf(filter) !==-1)
        ||(message.gender.toLowerCase().indexOf(filter) !==-1)




    
      })

      this.setState({filteredSearch:filteredList})
    }
    else{
      this.setState({filteredSearch: this.state.employee})
    }





    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchEmployee()
      .then(res => { this.setState({
        filteredSearch: res.data.results,
        employee: res.data.results })

      })
      
      .catch(err => this.setState({ error: err.results }));
  }



  sortList = (cell) => {

    let setList;

    if ((cell === "first") || (cell ==="last")) {
      if(this.state.sortType === "asc"){
        setList = this.state.filteredSearch.sort((a,b) => {
          return a.name[cell].localeCompare(b.name[cell])
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.filteredSearch.sort((a,b)=> {
          return b.name[cell].localeCompare(a.name[cell])
        })
      }
    }


    else if (cell === "email"){
      if(this.state.sortType === "asc"){
        setList = this.state.filteredSearch.sort((a,b) => {
          return a.email.localeCompare(b.email)
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.filteredSearch.sort((a,b)=> {
          return b.email.localeCompare(a.email)
        })
      }
    }


    else if ((cell === "city") || (cell ==="country")){
      if(this.state.sortType === "asc"){
        setList = this.state.filteredSearch.sort((a,b) => {
          return a.location[cell].localeCompare(b.location[cell])
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.filteredSearch.sort((a,b)=> {
          return b.location[cell].localeCompare(a.location[cell])
        })
      }
    }



    else if ((cell === "cell")||(cell ==="phone")){
      if(this.state.sortType === "asc"){
        setList = this.state.filteredSearch.sort((a,b) => {
          return a.cell.localeCompare(b.cell)
        })
        this.setState({sortType : "des"})
      } else {
        setList = this.state.filteredSearch.sort((a,b)=> {
          return b.cell.localeCompare(a.cell)
        })
      }
    }

    if (cell === "gender"){
      if(this.state.sortType === "asc"){
        setList = this.state.filteredSearch.sort((a,b) => {
          return a.gender.localeCompare(b.gender)
        })
        this.setState({sortType : "des"})
      } else {
        // eslint-disable-next-line
        setList = this.state.filteredSearch.sort((a,b)=> {
          return b.gender.localeCompare(a.gender)
        })
      }
    }
    this.setState({filteredSearch: setList})
  }


  render() {
    // const { search, employee } = this.state;
    // const lowercasedFilter = search.toLowerCase();
    // const filteredData = employee.filter(item => {
     
    // });


    return (
      <div>
        <Container style={{ maxWidth: "95%", marginTop: "5%", }}>
          <h1 className="text-center">Search for Eddy!</h1>
          <br></br>
          <br></br>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // employee={this.state.employee}
          />
          <br></br>

          {this.state.filteredSearch ? (

            <SearchResults
              results={this.state.filteredSearch}
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
