import React from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    );
};