import styled from "styled-components";

const NavWrapper = styled.header`
  background: var(--color-light-primary);
  width: 100%;
`;

const NavTitles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Navigation = styled.div`
  background: var(--color-light-secondary);
  padding: 1rem 0;
  width: 100%;
`;

export const NavItems = styled.nav`
  display: flex;
  justify-content: center;
  aligm-items: center;
  .list-menu li {
    display: inline;
    padding: 0 2rem;
  }
`;

export { NavWrapper, Navigation, NavTitles };
