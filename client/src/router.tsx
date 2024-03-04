import Home from "./pages/home";
import Login from "./pages/auth/login";
import React, { useEffect, useState } from "react";
import { getAcessToken } from "./services/userAuth";
import { Navigate, Routes, Route } from "react-router-dom";

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const accessToken = getAcessToken();

                if (!accessToken) {
                    setAuthenticated(false);
                    setLoading(false);
                    return;
                }

                if (accessToken) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.log(error);
                setAuthenticated(false);
            }

            setLoading(false);
        };

        checkAuthentication();
    }, []);

    if (loading) return <div></div>;

    if (authenticated) {
        return <React.Fragment>{element}</React.Fragment>;
    }

    return <Navigate to="/login" />;
};

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        </Routes>
    );
};

export default Router;