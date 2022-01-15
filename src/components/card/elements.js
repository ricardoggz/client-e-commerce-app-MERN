import styled from "styled-components";

const CardWrapper = styled.div`
  align-items: center;
  box-shadow: 1px 2px 10px #08141e1a;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
`;

const CardImage = styled.figure`
  width: 100%;
  height: 20rem;
  img {
    width: 100%;
    height:100%;
    object-fit:cover;
  }
`;

export { CardWrapper, CardImage };
