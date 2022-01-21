import styled from "styled-components";

const CardWrapper = styled.div`
  align-items: center;
  box-shadow: 1px 2px 10px #08141e1a;
  border-radius: 5px;
  display:flex;
  flex-direction:column;
  width: 100%;
  height: 100%;

  button {
    background:var(--color-dark-primary);
    color:var(--color-light-primary);
    margin-bottom:1rem;
    width:90%;
  }
`;

const CardImage = styled.figure`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardDescription = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 1rem;
  span {
    font-weight:bold;
  }
`;

export { CardWrapper, CardImage, CardDescription };
