import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: var(--color-dark-secondary);
  color: var(--color-light-primary);
  width: 100%;
  padding: 3rem 0;
`;

const FooterList = styled.div`
  text-align: center;
  line-height: 2rem;
  ul li {
    list-style: none;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (min-width: 240px) and (max-width: 720px) {
    text-align: justify;
  }
`;

export { FooterWrapper, FooterList };
