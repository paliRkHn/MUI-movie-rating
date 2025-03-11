import { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2d2062',
            light: '#656798'
        },
        secondary: {
            main: '#9668b4'
        },
        background: '#171033',
        text: {
            primary: '#ffffff',
            secondary: '#000000'
        }
    },
    typography: {
      fontFamily: 'Trebuchet MS, sans-serif'
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2d2062',
            light: '#9395b7'
        },
        secondary: {
            main: '#a27db6'
        },
        background: '#ffffff',
        text: {
            primary: '#000000',
            secondary: '#ffffff'
        }
    },
    typography: {
        fontFamily: 'Trebuchet MS, sans-serif'
    }
});

export const ThemeModeContext = createContext({
    switchColorMode: () => {},
    mode: 'dark'
});

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(() => ({
        switchColorMode: () => setMode(prevMode => prevMode === 'dark' ? 'light': 'dark'),
        mode
    }), [mode]);

    const theme = useMemo(() => mode === 'dark' ? darkTheme : lightTheme, [mode]);

    return (
        <ThemeModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    )
};