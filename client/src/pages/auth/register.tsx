import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { createUserService } from "../../services/userService";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateInput = () => {
        if (fullName == "" && nickName == "" && email == "" && password == "" && confirmPassword == "") {
            setError(true);
            setErrorMessage("The fields are empty");
            return false; 
        }

        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setError(true);
            setErrorMessage("The email address is invalid. Please try again");
            return false;
        }

        if (password === "") {
            setError(true);
            setErrorMessage("The password is invalid. Try again");
            return false;
        }

        if (fullName === "" && nickName === "") {
            setError(true);
            setErrorMessage("The names are invalid");
            return false;
        } else if (fullName === "") {
            setError(true);
            setErrorMessage("The full name is invalid");
            return false; 
        } else if (nickName == "") {
            setError(true);
            setErrorMessage("The nick name is invalid");
            return false;    
        }

        if (password === "") {
            setError(true);
            setErrorMessage("The password is invalid");
            return false; 
        } else if (password !== confirmPassword) {
            setError(true);
            setErrorMessage("The passwords don't match");
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (validateInput()) {
            const success = await createUserService({fullName, nickName, email, password});

            navigate('/login');
            sessionStorage.setItem('createUserSuccess', JSON.stringify(success));
        }
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 2500);
        }
    }, [error]);

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
                                placeholder="Pedro Silva"
                                onChange={(event) => setFullName(event.target.value)}
                                className={`w-[14rem] mb-10 p-2 outline-none border-2 rounded-md
                                transition ease-linear focus:border-zinc-900
                                ${error && (fullName === "") && "border-red-500"}`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nickname" className="mb-1 dark:text-zinc-100">Nickname</label>
                            <input 
                                type="text"
                                name="nickname"
                                placeholder="opedrosilva"
                                onChange={(event) => setNickName(event.target.value)}
                                className={`w-[14rem] mb-10 p-2 outline-none border-2 rounded-md
                                transition ease-linear focus:border-zinc-900
                                ${error && (nickName === "") && "border-red-500"}`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 dark:text-zinc-100">Email</label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            onChange={(event) => setEmail(event.target.value)}
                            className={`w-[30rem] mb-10 p-2 outline-none border-2 rounded-md
                            transition ease-linear focus:border-zinc-900
                            ${error && !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && "border-red-500"}`}
                        />
                    </div>
                    <div className="flex flex-col">
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 dark:text-zinc-100">Password</label>
                            <input 
                                type="password"
                                name="password"
                                onChange={(event) => setPassword(event.target.value)}
                                className={`w-[14rem] mb-10 p-2 outline-none border-2 rounded-md
                                transition ease-linear focus:border-zinc-900
                                ${error && (password === "" || password !== confirmPassword) && "border-red-500"}`}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirm" className="mb-1 dark:text-zinc-100">Confirm Password</label>
                            <input 
                                type="password"
                                name="confirm"
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                className={`w-[15rem] mb-10 p-2 outline-none border-2 rounded-md
                                transition ease-linear focus:border-zinc-900
                                ${error && (confirmPassword === "" || password !== confirmPassword) && "border-red-500"}`}
                            />
                        </div>
                    </div>
                    </div>
                    <button
                        onClick={handleSubmit}
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
        { (error) && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-red-500 text-zinc-50 py-2 px-4 rounded shadow text-center">
                {errorMessage}
            </div>
        )}
        </>
    );
};

export default Register;