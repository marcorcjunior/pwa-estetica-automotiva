import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Provider from './provider';

import Login from './pages/Login';
import Home from './pages/Home';

import Cliente from './pages/Cliente';
import ListaClientes from './pages/ListaClientes';

import Usuario from './pages/Usuario';

import ErrorPage from './pages/ErrorPage';
import isAuthenticated from './middleware/isAuthenticated';

const privateRoute = (children) =>
  isAuthenticated() ? children : <Navigate to="/" />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: privateRoute(<Home />),
  },
  {
    path: "/clientes",
    element: privateRoute(<ListaClientes />),
  },
  {
    path: "/cliente",
    element: privateRoute(<Cliente />),
  },
  {
    path: "/cliente/:id",
    element: privateRoute(<Cliente />),
  },
  {
    path: "/perfil",
    element: privateRoute(<Usuario />),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
