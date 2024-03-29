import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { setAccessToken } from "../../services/userAuth";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNew, setIsNew] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);

    const showCreateUserSuccess = () => {
        const userCreated = sessionStorage.getItem('createUserSuccess');

        if (userCreated == 'true') {
            setIsNew(true);
        } else {
            setIsNew(false);
        }
    }

    const verifyEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailRegex.test(email) === true) {
            return true;
        } else {
            setErrorEmail(true);
            setErrorMessage("The email address is invalid. Please try again");
            return false;
        }
    };

    const verifyPassword = (password: string) => {
        if (password === "") {
            setErrorPassword(true);
            setErrorMessage("The password is invalid. Try again");
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async () => {
        const isEmailValid = verifyEmail(email);
        const isPasswordValid = verifyPassword(password);

        if (isEmailValid && isPasswordValid) {
            const success = await setAccessToken({email, password});

            if (!success) {
                setError(true);
                setErrorMessage("This user doesn't exist.");
            } else {
                navigate('/explorer');
            }
        } else if (!isEmailValid && !isPasswordValid) {
            setError(true);
            setErrorMessage("The credentials are invalid. Try again");
        } else if (!isEmailValid) {
            setErrorEmail(true);
            setErrorMessage("The email address is invalid. Please try again");
        } else if (!isPasswordValid) {
            setErrorPassword(true);
            setErrorMessage("The password is invalid. Try again");
        }
    };

    useEffect(() => {
        showCreateUserSuccess();

        if (error || errorEmail || errorPassword) {
            setTimeout(() => {
                setError(false);
                setErrorEmail(false);
                setErrorPassword(false);
            }, 2500);
        }

        if (isNew) {
            setTimeout(() => {
                setIsNew(false);
                sessionStorage.removeItem('createUserSuccess');
            }, 1500);
        }
    }, [error, errorEmail, errorPassword, isNew]);

    return (
        <>
        <Header />
        <main className="flex flex-col w-screen p-5">
            <div className="flex flex-col items-center justify-center mt-8">
                <div className="flex flex-col w-[30rem] p-5">
                    <h1 className="text-2xl font-bold text-left mb-14 dark:text-zinc-100">Welcome Back!</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 dark:text-zinc-100">Email</label>
                        <input 
                            type="email"
                            name="email"
                            data-fail={errorEmail}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-[30rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                            transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                            dark:focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 dark:text-zinc-100">Password</label>
                        <input 
                            type="password"
                            name="password"
                            data-fail={errorPassword}
                            onChange={(event) => setPassword(event.target.value)}
                            className="w-[30rem] mb-10 p-2 outline-none border-2 border-zinc-300 rounded-md
                            transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500
                            dark:focus:border-indigo-500"
                        />
                    </div>
                    <button
                        onClick={handleSubmit} 
                        className="w-[30rem] p-2 my-5 text-zinc-50 border border-zinc-900 rounded-md bg-zinc-900
                        transition ease-linear hover:border-zinc-900 hover:bg-transparent hover:text-zinc-900
                        dark:border-indigo-500 dark:text-indigo-500 dark:hover:bg-indigo-500 dark:hover:text-zinc-100">
                            Sign In
                    </button>
                    <div className="w-[30rem]">
                        <h3 className="text-center dark:text-zinc-100">
                            Don't have an account? <Link to={'/register'} className="text-indigo-500 transition ease-linear hover:text-indigo-800">Create a new one!</Link>
                        </h3>
                        <hr className="w-full mt-5 text-center border-1 border-zinc-300 dark:border-zinc-500" />
                    </div>
                </div>
            </div>
        </main>
        <div className="w-full absolute bottom-0 flex items-center justify-center bg-zinc-900">
            <Footer />
        </div>
        { (error || errorEmail || errorPassword) && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-red-500 text-zinc-50 py-2 px-4 rounded shadow text-center">
                {errorMessage}
            </div>
        )}
        { (isNew) && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-emerald-500 text-zinc-50 py-2 px-4 rounded shadow text-center">
                User created successfully!
            </div>
        )}
        </>
    );
};

export default Login;