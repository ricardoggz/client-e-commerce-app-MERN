import React from "react";
import { LoaderWrapper, LoaderSpin, LoaderText } from "./elements";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderSpin />
      <LoaderText>
        Cargando...
      </LoaderText>
    </LoaderWrapper>
  );
};
