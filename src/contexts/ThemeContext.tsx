import Cookies from 'js-cookie';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextData {
    theme: string;
}

interface ThemeProviderProps {
    children: ReactNode;
    theme: string;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({
    children,
    ...rest
}: ThemeProviderProps) => {

    const [theme, setTheme] = useState(rest.theme ?? 'dark');

    useEffect(() => {
        Cookies.set('theme', String(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};