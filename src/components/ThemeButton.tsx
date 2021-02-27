import Cookies from 'js-cookie';
import { useState } from 'react';
import styles from '../styles/components/ThemeButton.module.css';

function ThemeButton({ theme }) {
    const [actualTheme, setActualTheme] = useState(theme)

    function changeTheme() {
        if (actualTheme === 'dark') {
            Cookies.set('theme', 'light');
            setActualTheme('light');
        } else {
            Cookies.set('theme', 'dark');
            setActualTheme('dark');
        }
    };

    return (
        <>
            <style global jsx>{`
                body {
                    --background: ${actualTheme === 'dark' ? '#1D2021' : '#F2F3F5'};
                    --text: ${actualTheme === 'dark' ? '#A3A3A3' : '#666666'};
                    --text-highlight: ${actualTheme === 'dark' ? '#111111' : '#B3B9FF'};
                    --title: ${actualTheme === 'dark' ? '#C1CDDA' : '#2E384D'};
                    --white: ${actualTheme === 'dark' ? '#181A1B' : '#fff'};
                    --green: ${actualTheme === 'dark' ? '#4cb332' : '#4CD62B'};
                    --blue: ${actualTheme === 'dark' ? '#4b78d1' : '#6699ff'};
                    --red: ${actualTheme === 'dark' ? '#b1223a' : '#E83F5B'};
                    --blue-dark: ${actualTheme === 'dark' ? '#2356bd' : '#3377ff'};
                    
                    transition: .4s;
                }
            `}
            </style>
            <button
                type="button"
                onClick={changeTheme}
                className={styles.themebutton}
            >
                <img
                    src={actualTheme === 'dark' ? "/icons/lighttheme.png" : "/icons/darktheme.png"}
                    alt="Dark theme"
                />
            </button>
        </>
    )
}

export default ThemeButton;
