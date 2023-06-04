import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Login from './pages/Login';
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cliente",
    element: <Cliente />,
  },
  {
    path: "/cliente/:id",
    element: <Cliente />,
  },
]);

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
