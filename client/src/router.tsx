import Home from "./pages/home";
import Login from "./pages/auth/login";
import React, { useEffect, useState } from "react";
import { setAccessToken } from "./services/userAuth";
import { Navigate, Routes, Route } from "react-router-dom";

const ProtectedRoute: React.FC<{ path: string; element: React.ReactNode }> = ({ element }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            const accessToken = await setAccessToken();

            if (accessToken) setAuthenticated(true);
        };
        checkAuthentication();
    }, []);

    if (authenticated) return <React.Fragment>{element}</React.Fragment>;

    return <Navigate to="/login" />;
};

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute element={<Home />} path={""} />} />
        </Routes>
    );
};

export default Router;