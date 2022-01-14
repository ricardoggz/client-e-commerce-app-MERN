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

  .hero-titles span {
    font-size: 2.5rem;
  }

  .hero-titles button {
      margin: 1.5rem;
      font-size:1.5rem;
  }
`;

export { HeroWrapper, HeroTitles };
