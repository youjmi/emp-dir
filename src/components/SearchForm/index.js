import React from "react";
import { Input, InputGroup } from "reactstrap";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    // <form className="search">
      <div className="form-group">
        {/* <label htmlFor="employeename"></label> */}
        <InputGroup>
        <input
          value={props.results}
          onChange={props.handleInputChange}
          name="employeeName"
          list="employee"
          type="text"
          className="form-control"
          placeholder="Type Here"

          // id="breed"
          
        />
        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>





        {/* <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        </InputGroup>
      </div>
    // </form>

    
  );
}

export default SearchForm;
