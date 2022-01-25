import styled from "styled-components";

const LoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /*responsive*/

  @media (min-width: 240px) and (max-width: 880px) {
    height: 80vh;
  }
`;

const FormContainer = styled.form`
  width: 30%;
  height: auto;
  box-shadow: 1px 2px 10px #08141e1a;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  label {
    padding: 0.6rem 0;
  }
  input {
    padding: 0.6rem;
  }
  .login-title, .signup{
    font-size: 1.5rem;
    text-align: center;
  }

  button {
    margin-top: 1rem;
    background: var(--color-blue-primary);
    color: var(--color-light-primary);
  }

  .signup {
    color: var(--color-blue-primary);
    padding-top: 1rem;
  }

  /*responsive*/

  @media (min-width: 240px) and (max-width: 880px) {
    width: 90%;
  }
`;

export { LoginWrapper, FormContainer };
