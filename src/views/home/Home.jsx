import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Card } from "../../components/card/Card";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";

import { bestSellers } from "../../components/card/cardData";

export const Home = () => {
  return (
    <>
      <Hero />
      <SectionContainer title="Productos destacados">
        <GridLayout>
          {bestSellers.map((image) => (
            <Card
              img={image.url}
              title={image.title}
              price={image.price}
              key={image.url}
            />
          ))}
        </GridLayout>
      </SectionContainer>
    </>
  );
};
