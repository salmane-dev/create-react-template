import React, { Component } from "react";
import { Route, BrowserRouter, NavLink, Switch /*, HashRouter */} from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Unsubscribe from "./Unsubscribe";
import PageNotFound from "./PageNotFound"; 

const data = require('./data.json'); 


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="my-root w-75">
           <NavLink exact to="/" className="logo"><h1>{data.header.website}</h1></NavLink> 

          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/unsubscribe">Unsubscribe</NavLink></li>
          </ul>

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/privacy" component={Privacy}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/unsubscribe" component={Unsubscribe}/>
              <Route component={PageNotFound}/>
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
