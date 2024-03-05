import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { setAccessToken } from "../../services/userAuth";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);

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
            console.log(success);

            if (!success) {
                setError(true);
                setErrorMessage("This user doesn't exist.");
            } else {
                navigate('/');
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
        if (error || errorEmail || errorPassword) {
            setTimeout(() => {
                setError(false);
                setErrorEmail(false);
                setErrorPassword(false);
            }, 2500);
        }
    }, [error, errorEmail, errorPassword]);

    return (
        <>
        <Header />
        <main className="flex flex-col w-screen p-5">
            <div className="flex flex-col items-center justify-center mt-8">
                <div className="flex flex-col w-[30rem] p-5">
                    <h1 className="text-2xl font-bold text-left mb-14">Welcome Back!</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input 
                            type="email"
                            name="email"
                            data-fail={errorEmail}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="example@gmail.com"
                            className="w-[30rem] mb-10 p-2 outline-none border border-zinc-300 rounded-md
                            transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">Password</label>
                        <input 
                            type="password"
                            name="password"
                            data-fail={errorPassword}
                            onChange={(event) => setPassword(event.target.value)}
                            className="w-[30rem] mb-10 p-2 outline-none border border-zinc-300 rounded-md
                            transition ease-linear focus:border-zinc-900 data-[fail=true]:border-red-500"
                        />
                    </div>
                    <button
                        onClick={handleSubmit} 
                        className="w-[30rem] p-2 my-5 text-zinc-50 border border-zinc-900 rounded-md bg-zinc-900
                        transition ease-linear hover:border-zinc-900 hover:bg-transparent hover:text-zinc-900">
                            Sign In
                    </button>
                    <div className="w-[30rem]">
                        <h3 className="text-center">
                            Don't have an account? <Link to={'/register'} className="text-blue-500 transition ease-linear hover:text-blue-800">Create a new one!</Link>
                        </h3>
                        <hr className="w-full mt-5 text-center border-1 border-zinc-300" />
                    </div>
                </div>
            </div>
        </main>
        { (error || errorEmail || errorPassword) && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-red-500 text-zinc-50 py-2 px-4 rounded shadow text-center">
                {errorMessage}
            </div>
        )}
        </>
    );
};

export default Login;