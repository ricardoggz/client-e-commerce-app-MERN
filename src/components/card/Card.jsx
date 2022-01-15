import React from "react";
import { CardWrapper, CardImage } from "./elements";

export const Card = ({ img }) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={img} loading="lazy"/>
      </CardImage>
    </CardWrapper>
  );
};
