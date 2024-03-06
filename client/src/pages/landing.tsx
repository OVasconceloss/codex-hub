import React from "react";
import { Link } from "react-router-dom";

import logoImage from "/images/codexhub-logo.png";

const Landing: React.FC = () => {
    return (
        <>
        <header className="flex items-center justify-between px-5 bg-zinc-900 border-b-1 border-zinc-600 rounded-b-md">
            <div className="flex items-center space-x-1">
                <img 
                    src={logoImage} 
                    alt="CodeHub Logo"
                    className="w-20 h-20 rounded-full object-cover"
                />
                <h1 className="text-2xl text-indigo-500 font-bold ">CodexHub</h1>
            </div>
            <div className="flex items-center space-x-5">
                <nav className="space-x-5">
                    <Link 
                        to={'/explore'} 
                        className="px-2 py-1 text-zinc-100 border-b border-zinc-900 
                        transition ease-linear hover:border-indigo-500 hover:text-indigo-500">Explore</Link>
                    <Link 
                        to={'https://github.com/OVasconceloss/codex-hub'}
                        target="_blank"
                        className="px-2 py-1 text-zinc-100 border-b border-zinc-900 
                        transition ease-linear hover:border-indigo-500 hover:text-indigo-500">Github</Link>
                    <Link 
                        to={'/aboutus'}
                        className="px-2 py-1 text-zinc-100 border-b border-zinc-900 
                        transition ease-linear hover:border-indigo-500 hover:text-indigo-500">About Us</Link>
                </nav>
                <h3 className="text-zinc-500">|</h3>
                <div className="space-x-5">
                    <Link to={'/register'}>
                        <button className="py-2 px-5 text-zinc-100 border rounded-sm
                        transition ease-linear hover:bg-indigo-500 hover:border-indigo-500">Sign Up</button>
                    </Link>
                    <Link to={'/login'}>
                        <button className="py-2 px-5 text-zinc-100 border rounded-sm
                        transition ease-linear hover:text-indigo-500 hover:border-indigo-500">Sign In</button>
                    </Link>
                </div>
            </div>
        </header>
        <main>

        </main>
        <footer>

        </footer>
        </>
    );
};

export default Landing;