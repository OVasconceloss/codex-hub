import { useState } from "react";
import { Header } from "../../components/header/header";
import { setAccessToken } from "../../services/userAuth";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        setAccessToken({email, password});
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
        </>
    );
};

export default Login;