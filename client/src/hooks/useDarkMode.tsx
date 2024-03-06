import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = 'dark' | 'light';

export const useDarkMode = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
    const [theme, setTheme] = useState<Theme>(localStorage.theme as Theme || 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        const colorTheme = theme === 'dark' ? 'light' : 'dark';
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, setTheme];
};