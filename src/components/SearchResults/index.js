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
            <th >First Name<button type="button" onClick={() => props.sortList("first")}></button>
</th>
            <th>Last Name<button type="button" onClick={() => props.sortList("last")}></button></th>
            <th>Email<button type="button" onClick={() => props.sortList("email")}></button></th>
            <th>City <button type="button" onClick={() => props.sortList("city")}></button></th>
            <th>Country<button type="button" onClick={() => props.sortList("country")}></button></th>
            <th>Cell Phone<button type="button" onClick={() => props.sortList("cell")}></button></th>
            <th>Main Phone<button type="button" onClick={() => props.sortList("phone")}></button></th>
            <th>Gender<button type="button" onClick={() => props.sortList("gender")}></button></th>
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
