import React from "react";
import { Link } from "react-router-dom";
import logoImage from "/images/codexhub-logo.png";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-[60rem] dark:w-[60rem] flex items-center justify-between px-5 border-t border-zinc-500
        bg-zinc-900">
            <div className="flex items-center space-x-1">
                <img 
                    src={logoImage} 
                    alt="CodeHub Logo"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <h3 className="text-lg text-indigo-500">&copy; {currentYear} CodexHub</h3>
            </div>
            <div className="space-x-5">
                <Link to={'/faq'}>
                    <button className="text-zinc-100 border-b border-zinc-900
                    transition ease-linear hover:border-indigo-500 hover:text-indigo-500">
                        FAQ
                    </button>
                </Link>
                <Link to={'/faq'}>
                    <button className="text-zinc-100 border-b border-zinc-900
                    transition ease-linear hover:border-indigo-500 hover:text-indigo-500">
                        Github
                    </button>
                </Link>
                <Link to={'/faq'}>
                    <button className="text-zinc-100 border-b border-zinc-900
                    transition ease-linear hover:border-indigo-500 hover:text-indigo-500">
                        About
                    </button>
                </Link>             
            </div>
        </footer>
    );
};

export default Footer;