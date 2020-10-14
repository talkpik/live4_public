import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Services from './Services';

function App() {
	return (
    <Router>
       
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="navbar-custom">
        <Navbar.Brand href="/"><img src="images/logo_new.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="navClass" className="ml-auto nav-item">
            <Nav.Link id="navLink" href="/" exact>Home</Nav.Link>
            <Nav.Link id="navLink" href="/Services" exact>Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    <Switch>
          					<Route exact path="/"><Header /></Route>
                    <Route exact path="/Services"><Services /></Route>                            
        				</Switch>
                        </Router>
  );
}
export default App;
