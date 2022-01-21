import React from "react";
import { CardWrapper, CardImage, CardDescription } from "./elements";
import { Button } from "../button/Button";
import { Loader } from "../loader/Loader";

export const Card = ({ img, title, price }) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={img} loading="lazy" alt={<Loader />} />
      </CardImage>
      <CardDescription>
        <span>{title}</span>
        <br />
        <span> {price} </span>
      </CardDescription>
      <Button title="Añadir al carrito" />
    </CardWrapper>
  );
};
