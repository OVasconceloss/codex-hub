import Home from "./pages/home";
import Login from "./pages/auth/login";
import React, { useEffect, useState } from "react";
import { setAccessToken } from "./services/userAuth";
import { Navigate, Routes, Route } from "react-router-dom";

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const email = localStorage.getItem('email');
                const password = localStorage.getItem('password');

                if (!email || !password) {
                    setAuthenticated(false);
                    setLoading(false);
                    return;
                }

                const accessToken = await setAccessToken({ email, password });

                if (accessToken) {
                    setAuthenticated(true);
                    localStorage.setItem('accessToken', accessToken);
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