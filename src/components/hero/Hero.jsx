import React from "react";
import { HeroTitles, HeroWrapper } from "./elements";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroTitles>
        <div className="hero-titles">
          <span className="title">
            Tu imaginación no tiene límites, nuestro stock tampoco...
          </span>
        </div>
      </HeroTitles>
    </HeroWrapper>
  );
};
