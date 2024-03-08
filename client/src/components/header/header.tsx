import { Link } from "react-router-dom";
import logoImage from "/images/codexhub-logo.png";
import React, { useEffect, useState } from "react";
import { ProfileMenu } from "../profile/profileMenu";
import { DarkModeButton } from "../button/darkModeButton";
import { clearAccessToken } from "../../services/userAuth";

export const Header: React.FC = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleProfileClick = () => setShowMenu(!showMenu);

    const handleLogout = () => {
        clearAccessToken();
        setIsLogged(false);
        setShowMenu(false);
    }

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) setIsLogged(true);
    }, [isLogged]);

    return (
        <header className="flex items-center justify-between px-5 bg-zinc-900 border-b-2 border-zinc-800 rounded-b-sm dark:bg-zinc-800">
            <div className="flex items-center space-x-1">
                <img src={logoImage} alt="CodeHub Logo" className="w-20 h-20 rounded-full object-cover" />
                <h1 className="text-2xl text-indigo-500 font-bold ">CodexHub</h1>
            </div>
            <nav className="flex items-center space-x-5">
                <div className="flex items-center space-x-5">
                    <Link to={'/explorer'} className="px-2 py-1 text-zinc-100 border-b border-zinc-900 transition ease-linear hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-500">Explore</Link>
                    <a href="https://github.com/OVasconceloss/codex-hub" target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-zinc-100 border-b border-zinc-900 transition ease-linear hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-500">Github</a>
                    <Link to={'/aboutus'} className="px-2 py-1 text-zinc-100 border-b border-zinc-900 transition ease-linear hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-800 dark:hover:border-indigo-500">About</Link>
                </div>
                <h3 className="text-zinc-500">|</h3>
                <div className="flex">
                    {!isLogged ?
                        <>
                            <Link to={'/register'}>
                                <button className="py-2 px-5 text-zinc-100 border rounded-sm transition ease-linear hover:bg-indigo-500 hover:border-indigo-500">Sign Up</button>
                            </Link>
                            <Link to={'/login'}>
                                <button className="py-2 px-5 text-zinc-100 border rounded-sm transition ease-linear hover:text-indigo-500 hover:border-indigo-500">Sign In</button>
                            </Link>
                        </>
                        :
                        <>
                            <button onClick={handleProfileClick} className={`${showMenu ? 'hidden' : 'py-2 px-5 mr-5 text-zinc-100 border rounded-sm transition ease-linear hover:text-indigo-500 hover:border-indigo-500'}`}>Profile</button>
                            {showMenu && <ProfileMenu handleLogout={handleLogout} handleProfileClick={handleProfileClick} />}
                        </>
                    }
                    <DarkModeButton />
                </div>
            </nav>
        </header>
    );
};