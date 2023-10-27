import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/home/home';
import CharactersPage from './pages/characters/characters';
import CharacterPage from './pages/character/character';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/characters',
    element: <CharactersPage />,
  },
  {
    path: '/characters/:id',
    element: <CharacterPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
