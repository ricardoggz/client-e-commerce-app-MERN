import React from "react";
import { Button } from "../button/Button";
import { HeroTitles, HeroWrapper } from "./elements";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitles>
          <div className="hero-titles">
              <span>Tu imaginación no tiene límites, nuestro stock tampoco...</span>
              <br />
              <Button title="Conoce nuestras ofertas" />
          </div>
      </HeroTitles>
    </HeroWrapper>
  );
};
