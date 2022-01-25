import React, { useState, useEffect } from "react";
import axios from "axios";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { Card } from "../../components/card/Card";

export const WomanCategory = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const URL_ROOT =
      "https://server-e-commerce-api.herokuapp.com/api/womanproducts";
    axios
      .get(URL_ROOT)
      .then((response) => {
        const data = response.data;
        setCard(data);
      })
      .catch((error) => error);
  }, []);
  return (
    <SectionContainer title="Mujer">
      <GridLayout>
        {card.map((image) => (
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
