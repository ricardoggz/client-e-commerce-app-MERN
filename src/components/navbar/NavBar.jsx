import React from "react";
import { NavWrapper, NavItems, NavTitles, Navigation } from "./elements";
import { Button } from "../button/Button";

export const NavBar = () => {
  return (
    <NavWrapper>
      <NavTitles className="flex-container">
        <span>STORE APP</span>
        <Button title="Acceder" />
      </NavTitles>
      <Navigation>
        <NavItems className="flex-container">
          <ul className="list-menu">
            <li>Mujer</li>
            <li>Hombre</li>
            <li>Ofertas</li>
          </ul>
        </NavItems>
      </Navigation>
    </NavWrapper>
  );
};
