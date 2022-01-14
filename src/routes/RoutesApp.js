import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../views/home/Home";

export const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

    )
}