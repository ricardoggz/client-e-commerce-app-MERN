import React from "react";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { Card } from "../../components/card/Card";

import { womanCategory } from "../../components/card/cardData";

export const WomanCategory = () => {
  return (
    <SectionContainer title="Mujer">
      <GridLayout>
        {womanCategory.map((image) => (
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
