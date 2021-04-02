import React from "react";
import { InputGroup } from "reactstrap";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {


  return (
    // <form className="search">
      <div className="form-group">
        {/* <label htmlFor="employeename"></label> */}
        <InputGroup>
        <input
          value={props.search}
          name="employeeName"
          list="employee"
          type="text"
          className="form-control"
          placeholder="Type Here"
          onChange={props.handleInputChange}

        />
      
        <button type="button" onClick={props.handleFormSubmit} className="btn btn-success">
          Refresh
        </button>
        </InputGroup>
      </div>

    
  );
}

export default SearchForm;
