import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    // <div>
    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>
    // </div>

    <div className="list-group search-results">
      <table className="table">
        <caption>Searched Employees</caption>
        <thread>
          <tr>
            <th >Profile Picture</th>
            <th >First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>State</th>
            <th>Country</th>
            <th>Cell Phone</th>
            <th>Main Phone</th>
            <th>Gender</th>
          </tr>
        </thread>
        <tbody>
          {props.results.map(message => (
            <tr>
              <td><img alt ="profilePic" src ={message.picture.thumbnail} className="img-fluid"/> </td>
              <td >{message.name.first}</td>
              <td >{message.name.last}</td>
              <td >{message.email}</td>
              <td>{message.location.state}</td>
              <td>{message.location.country}</td>
              <td>{message.cell}</td>
              <td>{message.phone}</td>
              <td>{message.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default SearchResults;
