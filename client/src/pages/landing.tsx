import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/header";

const Landing: React.FC = () => {
    return (
        <>
        <Header />
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