import React from "react";
import { Card } from "../../components/card/Card";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";
import { GridLayout } from "../../components/gridLayout/GridLayout";

import { menCategory } from "../../components/card/cardData";
export const MenCategory = () => {
  return (
    <SectionContainer title="Hombre">
      <GridLayout>
        {menCategory.map((image) => (
          <Card
            img={image.url}
            title={image.title}
            price={image.price}
            key={image.url}
          />
        ))}
      </GridLayout>
    </SectionContainer>
  );
};
