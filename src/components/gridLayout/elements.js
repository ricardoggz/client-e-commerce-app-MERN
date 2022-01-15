import styled from "styled-components";

const GridWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap: 1rem;  
  
  @media (min-width:240px) and (max-width:880px){
      grid-template-columns: 1fr;
  }
`;

export { GridWrapper }