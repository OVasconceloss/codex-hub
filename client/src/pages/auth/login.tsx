import { useState } from "react";
import { Header } from "../../components/header/header";
import { setAccessToken } from "../../services/userAuth";

interface Error {
    error: boolean,
}

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<Error>();
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        const verifyEmail = (email: string) => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (emailRegex.test(email) === true)
                setAccessToken({email, password});
            else {
                setError({ error: true });
                setErrorMessage("The email address is invalid. Please try again");
            }
        };

        verifyEmail(email);
    };

    return (
        <>
        <Header />
        <main className="flex flex-col items-center w-screen p-5">
            <h1 className="text-2xl font-bold">Login</h1>
            <div>
                <div className="flex flex-col w-full p-5">
                    <label htmlFor="email" className="mb-2">Email</label>
                    
                    <input 
                        type="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-96 mb-5 p-2 outline-none border border-zinc-300 rounded-md"
                    />
                    <label htmlFor="password" className="mb-2">Password</label>
                    
                    <input 
                        type="password"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-96 mb-5 p-2 outline-none border border-zinc-300 rounded-md"
                    />
                    <button
                        onClick={handleSubmit} 
                        className="p-2 text-zinc-50 border border-zinc-900 rounded-md bg-zinc-900"
                    >Login</button>
                </div>
            </div>
        </main>
        {error && (
            <div className="w-[25rem] fixed bottom-5 right-5 bg-red-500 text-zinc-50 py-2 px-4 rounded shadow">
                {errorMessage}
            </div>
        )} 
        </>
    );
};

export default Login;