import React, { useEffect, useContext } from "react";
import { userContext } from "../../context/userContext";

export const Layout = ({ children }) => {
  const { saveToken, clearToken } = useContext(userContext);
  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      saveToken(token);
    } else {
      clearToken();
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);
  return <>{children}</>;
};
