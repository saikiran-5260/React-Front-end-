import React, { Component } from "react";

class Registration extends Component {
  render() {
    return (
      <form action="">
        <h1>Registration</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="textname" htmlFor="name" placeholder="Enter Name" />
          <br />
          <br />
          <label htmlFor="PhoneNum">Phone Number</label>
          <input
            type="textPhoneNum"
            htmlFor="PhoneNum"
            placeholder="Enter phonenumber"
          />
          <br />
          <br />
          <label htmlFor="Location">location</label>
          <input
            type="textLocation"
            htmlFor="Location"
            placeholder="Enter city"
          />
          <br />
          <br />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
export default Registration;
