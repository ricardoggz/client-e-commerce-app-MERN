import React from "react";
import { Button } from "../button/Button";
import { HeroTitles, HeroWrapper } from "./elements";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitles>
          <div className="hero-titles">
              <span className="title">Tu imaginación no tiene límites, nuestro stock tampoco...</span>
              <br />
              <span className="title-offer">75% de descuento en toda la tienda</span>
              <br />
              <Button title="Ver ofertas" />
          </div>
      </HeroTitles>
    </HeroWrapper>
  );
};
