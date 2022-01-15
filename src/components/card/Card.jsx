import React from "react";
import { CardWrapper, CardImage, CardDescription } from "./elements";

export const Card = ({ img, title, price }) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={img} loading="lazy" />
      </CardImage>
      <CardDescription>
        <span>{title}</span>
        <br />
        <span> {price} </span>
      </CardDescription>
    </CardWrapper>
  );
};
