/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

export const DarkModeButton = () => {
    const [colorTheme, setColorTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(colorTheme === 'dark');

    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'light' : 'dark';

        setDarkMode(!darkMode);
        setColorTheme(newTheme);
    }

    useEffect(() => toggleDarkMode(), []);

    return (
        <button 
            className="w-20 rounded-sm py-[6px] px-5 border bg-transparent text-zinc-100 text-lg transition ease-linear 
            hover:bg-blue-500 hover:text-zinc-100 hover:border-indigo-500 dark:text-zinc-100 dark:hover:bg-indigo-500 
            dark:hover:text-zinc-100 dark:hover:border-indigo-500" 
            onClick={toggleDarkMode}>
            <i className={`fa-solid fa-${darkMode ? 'sun' : 'moon'}`}></i>
        </button>
    );
};