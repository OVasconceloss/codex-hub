import React from "react";
import { Link } from "react-router-dom";

import logoImage from "/images/codexhub-logo.png";
import { DarkModeButton } from "../components/button/darkModeButton";

const Landing: React.FC = () => {
    return (
        <>
        <header className="flex items-center justify-between px-5 bg-zinc-900 border-b-2 border-zinc-800 rounded-b-sm
        dark:bg-zinc-800">
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
                        to={'/explorer'} 
                        className="px-2 py-1 text-zinc-100 border-b border-zinc-900 
                        transition ease-linear hover:border-indigo-500 hover:text-indigo-500
                        dark:border-zinc-800 dark:hover:border-indigo-500">Explore</Link>
                    <Link 
                        to={'https://github.com/OVasconceloss/codex-hub'}
                        target="_blank"
                        className="px-2 py-1 text-zinc-100 border-b border-zinc-900 
                        transition ease-linear hover:border-indigo-500 hover:text-indigo-500
                        dark:border-zinc-800 dark:hover:border-indigo-500">Github</Link>
                    <Link 
                        to={'/aboutus'}
                        className="px-2 py-1 text-zinc-100 border-b border-zinc-900 
                        transition ease-linear hover:border-indigo-500 hover:text-indigo-500
                        dark:border-zinc-800 dark:hover:border-indigo-500">About Us</Link>
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
                    <DarkModeButton />
                </div>
            </div>
        </header>
        <main className="flex flex-col items-center pt-24 dark:bg-zinc-900">
            <section className="h-full flex flex-col items-center space-y-7 p-5">
                <h3 className="text-lg text-indigo-500">CodexHub Discussion</h3>
                <h1 className="w-[40rem] text-4xl font-bold text-center tracking-wide dark:text-indigo-500">Promoting teamwork and ongoing learning for developers worldwide</h1>
                <p className="w-[45rem] text-md text-zinc-600 text-center dark:text-zinc-300">
                    Explore, Connect, Inspire: Welcome to a platform where questions start conversations,
                    ideas inspire innovation, and connections promote growth. Join a vibrant community where
                    sharing, learning, and creating connections with others is at the center of every interaction.
                </p>
                <Link to={'/explorer'}>
                    <button 
                        className="w-40 my-5 px-3 py-2 text-lg text-zinc-100 bg-indigo-500 border-2 rounded-sm
                        transition ease-linear hover:text-indigo-500 hover:bg-transparent hover:border-indigo-500
                        dark:border-zinc-900 dark:hover:border-indigo-500">Get Started</button>
                </Link>
            </section>
            <h2 className="mt-44 text-2xl font-bold text-center tracking-wide dark:text-indigo-500">Dedicated space for conversations</h2>
        </main>
        <footer>

        </footer>
        </>
    );
};

export default Landing;