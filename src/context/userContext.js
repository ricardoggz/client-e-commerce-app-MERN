import React, { useState, createContext } from "react";

const userContext = createContext();
const { Provider, Consumer } = userContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ token: "No hay token" });
  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };
  const clearToken = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <Provider value={{ user, saveToken, clearToken }}>{children}</Provider>
  );
};

export { UserProvider, Consumer, userContext };
