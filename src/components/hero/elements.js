import styled from "styled-components";
import heroBackground from "../../images/hero-bg.jpg";

const HeroWrapper = styled.section`
  width: 100%;
  height: 60vh;
  background: url(${heroBackground});
  background-size: cover;
  background-position: center;
`;

const HeroTitles = styled.div`
  align-items: center;
  background: #00000099;
  color: var(--color-light-primary);
  display: flex;
  justify-content: center;
  height: 60vh;
  text-align: center;
  width: 100%;

  .hero-titles .title {
    font-size: 2.5rem;
  }
  .hero-titles .title-offer{
    font-size:1.5rem;
    font-style:italic;
  }

  .hero-titles button {
      margin: 1.5rem;
      font-size:1.5rem;
  }

  /*responsive*/
  @media (min-width:240px) and (max-width:880px) {
    .hero-titles .title{
      font-size:1.5rem;
    }
    .hero-titles .title-offer{
      font-size:1rem;
    }
    .hero-titles button {
      font-size:1rem;
    }
  }
`;

export { HeroWrapper, HeroTitles };
