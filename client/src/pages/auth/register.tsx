import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

const Register: React.FC = () => {
    return (
        <>
        <Header />
        <main className="flex flex-col w-screen p-5">
            <div className="flex flex-col items-center justify-center mt-8">
                <div className="flex flex-col w-[30rem] p-5">
                    <h1 className="text-2xl font-bold text-left mb-14 dark:text-zinc-100">Welcome to CodexHub!</h1>
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col">
                            <label htmlFor="fullname" className="mb-1 dark:text-zinc-100">Full Name</label>
                            <input 
                                type="text"
                                name="fullname"
                                placeholder="Pedro Johson"
                                className="w-[14rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                                transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                                dark:focus:border-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nickname" className="mb-1 dark:text-zinc-100">Nickname</label>
                            <input 
                                type="text"
                                name="nickname"
                                placeholder="opedrorealjohson"
                                className="w-[15rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                                transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                                dark:focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 dark:text-zinc-100">Email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="w-[30rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                            transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                            dark:focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex flex-col">
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 dark:text-zinc-100">Password</label>
                            <input 
                                type="password"
                                name="password" 
                                className="w-[14rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                                transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                                dark:focus:border-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirm" className="mb-1 dark:text-zinc-100">Confirm Password</label>
                            <input 
                                type="password"
                                name="confirm"
                                className="w-[15rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                                transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                                dark:focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    </div>
                    <button
                        className="w-[30rem] p-2 my-5 text-zinc-50 border border-zinc-900 rounded-md bg-zinc-900
                        transition ease-linear hover:border-zinc-900 hover:bg-transparent hover:text-zinc-900
                        dark:border-indigo-500 dark:text-indigo-500 dark:hover:bg-indigo-500 dark:hover:text-zinc-100">
                            Sign Up
                    </button>
                    <div className="w-[30rem]">
                        <h3 className="text-center dark:text-zinc-100">
                            Already have an account? <Link to={'/login'} className="text-indigo-500 transition ease-linear hover:text-indigo-800">Log in to CodexHub!</Link>
                        </h3>
                        <hr className="w-full mt-5 text-center border-1 border-zinc-300 dark:border-zinc-500" />
                    </div>
                </div>
            </div>
        </main>
        <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
            <Footer /> 
        </div>
        </>
    );
};

export default Register;