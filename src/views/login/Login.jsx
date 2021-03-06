import React from "react";
import { Link } from "react-router-dom";
import { LoginWrapper, FormContainer } from "./elements";
import { Button } from "../../components/button/Button";

export const Login = () => {
  return (
    <LoginWrapper>
      <FormContainer>
        <span className="login-title">Iniciar Sesión</span>
        <label>Correo:</label>
        <input type="email" placeholder="tu correo" />
        <label>Contraseña:</label>
        <input type="password" placeholder="tu contraseña" />
        <Button title="Iniciar Sesión" />
        <Link to="/signup" className="signup">
          <span>¿No tienes cuenta? Registrate ahora</span>
        </Link>
      </FormContainer>
    </LoginWrapper>
  );
};
