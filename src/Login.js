import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form action="">
        <h1>Login</h1>
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
          <button>Login</button>
        </div>
      </form>
    );
  }
}
export default Login;
