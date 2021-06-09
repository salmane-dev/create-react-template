import React, { Component } from "react";
const data = require('./data.json'); 
 

class Home extends Component {
  render() {
    return (
      <div className="home">
          <h2>Welcome To Our Website</h2> 
          <p> You've found { window.location.hostname +" "+ data.body.parag1}  </p>
          <p> {data.body.parag2}</p>
      </div>
    );
  }
}
 
export default Home;
