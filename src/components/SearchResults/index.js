import React from "react";
import "./style.css";
import {Table,Button} from 'reactstrap'

function SearchResults(props) {
return (
      <Table  hover bordered responsive className="table">
        <caption>Searched Employees</caption>
        <thead>
          <tr>
            <th >Profile Picture</th>
            <th ><Button color ="link" onClick={() => props.sortList("first")}>First Name</Button></th>
            <th><Button color ="link" onClick={() => props.sortList("last")}>Last Name</Button></th>
            <th><Button color = "link" onClick={() => props.sortList("email")}>Email</Button></th>
            <th><Button color = "link" onClick={() => props.sortList("city")}>City</Button></th>
            <th><Button color = "link" onClick={() => props.sortList("country")}>Country</Button></th>
            <th><Button color = "link"onClick={() => props.sortList("cell")}>Cell Phone</Button></th>
            <th><Button color = "link" onClick={() => props.sortList("phone")}>Main Phone</Button></th>
            <th><Button color = "link" onClick={() => props.sortList("gender")}>Gender</Button></th>
          </tr>
        </thead>
        
        <tbody>
          {props.results.map(message => (
            <tr key= {message.cell}>
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
