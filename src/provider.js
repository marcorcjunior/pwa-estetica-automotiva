import React, { createContext, useCallback, useMemo, useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import api from './utils/api';

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const logar = useCallback((email, senha) =>
        api.post('/auth/login', { email, senha }));

    const contextValue = useMemo(() => ({
        currentUser,
        logar,
    }), [currentUser, logar]);

    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                light: '#606dbb',
                main: '#3949ab',
                dark: '#273377',
                contrastText: '#fff',
            },
            secondary: {
                light: '#5fa463',
                main: '#388e3c',
                dark: '#27632a',
                contrastText: '#000',
            },
        },
    });

    return (
        <AuthContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

export default Provider;
