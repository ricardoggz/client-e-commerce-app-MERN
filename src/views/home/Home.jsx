import React, { useState, useEffect } from "react";
import axios from "axios";
import { Hero } from "../../components/hero/Hero";
import { Card } from "../../components/card/Card";
import { GridLayout } from "../../components/gridLayout/GridLayout";
import { SectionContainer } from "../../components/sectionContainer/SectionContainer";
import { Loader } from "../../components/loader/Loader";

//import { getBestSellers } from "../../services/getBestSellers";

export const Home = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const URL_ROOT =
      "https://server-e-commerce-api.herokuapp.com/api/bestsellerproducts";
    axios
      .get(URL_ROOT)
      .then((response) => {
        const data = response.data;
        setCard(data);
        setLoading(true);
      })
      .catch((error) => error);
  }, []);

  return (
    <>
      <Hero />
      <SectionContainer title="Productos destacados">
        {loading ? (
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
        ) : (
          <Loader />
        )}
      </SectionContainer>
    </>
  );
};
