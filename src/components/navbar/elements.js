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
  .logo a{
    text-decoration:none;
    color:var(--color-dark-primary);
    font-size:1.5rem;
    font-weight:bold;
    padding:1rem 0;
  }
  .logo a:hover{
    background:var(--color-light-secondary);
    transition: all 300ms ease;
  }
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
  }
  .list-menu a{
    text-decoration: none;
    color:var(--color-dark-primary);
    padding: 1rem 2rem;
    font-size:1.2rem;
  }
  .list-menu a:hover{
    background: var(--color-light-primary);
    transition: all 300ms ease;
  }
`;

export { NavWrapper, Navigation, NavTitles };
