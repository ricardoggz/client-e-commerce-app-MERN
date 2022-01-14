import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "../button/Button";
import { RoutesApp } from "../../routes/RoutesApp";
import { NavWrapper, NavItems, NavTitles, Navigation } from "./elements";


export const NavBar = () => {
  return (
    <Router>
    <NavWrapper>
      <NavTitles className="flex-container">
        <span className="logo"><Link to="/">STORE APP</Link></span>
        <Button title="Acceder" />
      </NavTitles>
      <Navigation>
        <NavItems className="flex-container">
          <ul className="list-menu">
            <li><Link to="/">Mujer</Link></li>
            <li><Link to="/">Hombre</Link></li>
            <li><Link to="/">Ofertas</Link></li>
          </ul>
        </NavItems>
      </Navigation>
    </NavWrapper>
    <RoutesApp />
    </Router>
  );
};
