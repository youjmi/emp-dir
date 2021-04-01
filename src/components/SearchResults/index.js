import React from "react";
import "./style.css";
import {Table} from 'reactstrap'

function SearchResults(props) {
return (
      <Table dark hover bordered responsive className="table">
        <caption>Searched Employees</caption>
        <thead>
          <tr>
            <th >Profile Picture</th>
            <th >First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Country</th>
            <th>Cell Phone</th>
            <th>Main Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        
        <tbody>
          {props.results.map(message => (
            <tr>
              <td><img alt ="profilePic" src ={message.picture.large} className="img-fluid"/> </td>
              <td >{message.name.first}</td>
              <td >{message.name.last}</td>
              <td >{message.email}</td>
              <td>{message.location.city}</td>
              <td>{message.location.country}</td>
              <td>{message.cell}</td>
              <td>{message.phone}</td>
              <td>{message.gender}</td>
            </tr>
          ))}
        </tbody>
        
      </Table>
  );
}

export default SearchResults;
