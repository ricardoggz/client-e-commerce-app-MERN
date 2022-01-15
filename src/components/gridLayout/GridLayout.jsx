import React from "react";
import { GridWrapper } from "./elements";

export const GridLayout = ({ children }) => {
  return <GridWrapper className="flex-container">{children}</GridWrapper>;
};
