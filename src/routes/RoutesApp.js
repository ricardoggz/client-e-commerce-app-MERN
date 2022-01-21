import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home/Home";
import { Login } from "../views/login/Login";
import { Signup } from "../views/login/Signup";
import { WomanCategory } from "../views/store/womanCategory";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/womanCategory" element={<WomanCategory />} />
    </Routes>
  );
};
