import styled from "styled-components";

const LoaderWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:50vh;
`;

const LoaderSpin = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-left-color: var(--color-blue-primary);
  animation: spin infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transfrom: rotate(360deg);
    }
  }
`;

const LoaderText = styled.div`
 text-align:center;
 padding: 1rem;
`;

export { LoaderWrapper, LoaderSpin, LoaderText };
