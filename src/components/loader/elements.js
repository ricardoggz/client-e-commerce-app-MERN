import styled from "styled-components";

const LoaderWrapper = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 1.5rem;
  height: 1.5rem;
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

export { LoaderWrapper };
