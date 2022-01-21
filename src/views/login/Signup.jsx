import React from "react";
import { Link } from "react-router-dom";
import { LoginWrapper, FormContainer } from "./elements";
import { Button } from "../../components/button/Button";

export const Signup = () => {
  return (
    <LoginWrapper>
      <FormContainer>
        <span className="login-title">Registrarse</span>
        <label>Nombre(s):</label>
        <input type="text" placeholder="tu nombre" />
        <label>Apellidos:</label>
        <input type="text" placeholder="tus apellidos" />
        <label>Correo:</label>
        <input type="email" placeholder="tu correo" />
        <label>Contraseña:</label>
        <input type="password" placeholder="tu contraseña" />
        <Button title="Registrarse" />
        <Link to="/login" className="signup">
          <span>¿Ya tienes cuenta? Inicia sesión ahora</span>
        </Link>
      </FormContainer>
    </LoginWrapper>
  );
};
