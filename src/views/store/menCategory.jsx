import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/card/Card";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";
import { GridLayout } from "../../components/gridLayout/GridLayout";

//import { menCategory } from "../../components/card/cardData";
export const MenCategory = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const URL_ROOT =
      "https://server-e-commerce-api.herokuapp.com/api/menproducts";
    axios
      .get(URL_ROOT)
      .then((response) => {
        const data = response.data;
        setCard(data);
      })
      .catch((error) => error);
  }, []);
  return (
    <SectionContainer title="Hombre">
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
