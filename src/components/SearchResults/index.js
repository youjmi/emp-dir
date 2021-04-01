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
            <th ><span onClick={() => props.sortList("first")}>First Name</span></th>
            <th><span onClick={() => props.sortList("last")}>Last Name</span></th>
            <th><span onClick={() => props.sortList("email")}>Email</span></th>
            <th><span onClick={() => props.sortList("city")}>City</span></th>
            <th><span onClick={() => props.sortList("country")}>Country</span></th>
            <th><span onClick={() => props.sortList("cell")}>Cell Phone</span></th>
            <th><span onClick={() => props.sortList("phone")}>Main Phone</span></th>
            <th><span onClick={() => props.sortList("gender")}>Gender</span></th>
          </tr>
        </thead>
        
        <tbody>
          {props.results.map(message => (
            <tr key= {message.id}>
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
