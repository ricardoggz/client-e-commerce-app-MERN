import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "../button/Button";
import { RoutesApp } from "../../routes/RoutesApp";
import { NavWrapper, NavItems, NavTitles, Navigation } from "./elements";
import { BsCart3 } from "react-icons/bs";


export const NavBar = () => {
  return (
    <Router>
    <NavWrapper>
      <NavTitles className="flex-container">
        <span className="logo"><Link to="/">STORE APP</Link></span>
        <Link to="/login"><Button title="Acceder" /></Link>
      </NavTitles>
      <Navigation>
        <NavItems className="flex-container">
          <ul className="list-menu">
            <li><Link to="/womanCategory">Mujer</Link></li>
            <li><Link to="/menCategory">Hombre</Link></li>
            <li><Link to="/"><BsCart3 /></Link></li>
          </ul>
        </NavItems>
      </Navigation>
    </NavWrapper>
    <RoutesApp />
    </Router>
  );
};
