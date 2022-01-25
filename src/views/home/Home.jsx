import React, { useState, useEffect } from "react";
import { Hero } from "../../components/hero/Hero";
import { Card } from "../../components/card/Card";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";

//import { getBestSellers } from "../../services/getBestSellers";

export const Home = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    const URL_ROOT = "https://server-e-commerce-api.herokuapp.com/api/bestsellerproducts";
    fetch(URL_ROOT)
      .then((response) => response.json())
      .then((data) => setCard(data))
      .catch((error) =>error);
  }, []);

  return (
    <>
      <Hero />
      <SectionContainer title="Productos destacados">
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
    </>
  );
};
