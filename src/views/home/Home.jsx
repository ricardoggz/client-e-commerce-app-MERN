import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Card } from "../../components/card/Card";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";

import { cardImages } from "../../components/card/cardData";

export const Home = () => {
  return (
    <>
      <Hero />
      <SectionContainer title="Productos destacados">
        <GridLayout>
          {cardImages.map((image) => (
            <Card img={image.url} />
          ))}
        </GridLayout>
      </SectionContainer>
    </>
  );
};
