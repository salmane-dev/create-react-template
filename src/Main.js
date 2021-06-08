import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  NavLink,
  //HashRouter
} from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Unsubscribe from "./Unsubscribe";
import Notfound from "./Notfound";



class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="my-root w-75">
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/unsubscribe">Unsubscribe</NavLink></li>
          </ul>
          <div className="content">
            <Route path="*" component={Notfound}/>
            <Route exact path="/" component={Home}/>
            <Route path="/privacy" component={Privacy}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/unsubscribe" component={Unsubscribe}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
