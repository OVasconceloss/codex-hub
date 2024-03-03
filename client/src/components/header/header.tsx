import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-5 bg-zinc-900 rounded-b-lg">
            <Link to={'/'} className="flex items-center space-x-2 text-2xl font-bold text-zinc-50 
            transition ease-linear hover:text-zinc-200">
                <i className="fa-solid fa-laptop-code"></i>
                <h1>DevNews</h1>
            </Link>
            <div className="space-x-5">
                <input 
                    type="text" 
                    name="search" 
                    id="search"
                    className="w-64 p-2 text-sm outline-none rounded"
                    placeholder="Search"
                />
                <Link to={'/login'}>
                    <button className="w-20 p-1 text-zinc-50 bg-zinc-900 border border-zinc-50 rounded-md
                    transition ease-linear hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-900 hover:scale-110">Sign In</button>
                </Link>
                <Link to={'/register'}>
                    <button className="w-20 p-1 text-zinc-900 bg-zinc-50 border border-zinc-900 rounded-md
                    transition ease-linear hover:text-zinc-50 hover:bg-zinc-900 hover:border-zinc-50 hover:scale-110">Sign Up</button>
                </Link>
            </div>
        </header>
    );
};