import Home from "./pages/home";
import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import CreatePost from "./pages/posts/createPost";
import React, { useEffect, useState } from "react";
import { getAcessToken } from "./services/userAuth";
import { Navigate, Routes, Route } from "react-router-dom";
import ShowPost from "./pages/posts/showPost";

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
    }, [authenticated, loading]);

    if (loading) {
        return <div></div>;
    }

    if (authenticated) {
        return <React.Fragment>{element}</React.Fragment>;
    }

    return <Navigate to="/login" />;
};

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={ <CreatePost /> } />
            <Route path="/register" element={ <Register /> }  />
            <Route path="/explorer" element={<ProtectedRoute element={ <Home /> } />} />
            <Route path="/post/:id" element={ <ProtectedRoute element={ <ShowPost /> } />} />
        </Routes>
    );
};

export default Router;