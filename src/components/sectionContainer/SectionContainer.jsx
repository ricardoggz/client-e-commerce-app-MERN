import React from "react";
import { SectionWrapper } from "./elements";

export const SectionContainer = ({ children, title }) => {
  return (
    <SectionWrapper>
      <h1 className="title">{title}</h1>
      {children}
    </SectionWrapper>
  );
};
