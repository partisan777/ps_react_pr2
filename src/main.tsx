import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/mainLayout/MainLayout';
import { MainPage } from './pages/mainPage/MainPage';
import { UserContextProvider } from './components/context/UserContext';
import { LoginPage } from './pages/loginPage/LoginPage';
import { SearcPage } from './pages/searchPage/SearchPage';
import { FavoritesPage } from './pages/favoritesPage/FavoritesPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <MainPage />
			},
			{
				path: '/login',
				element: <LoginPage />
			},
      {
				path: '/search',
				element: <SearcPage />
			},
      {
				path: '/favorites',
				element: <FavoritesPage />
			}
		]
	},
  /*{
		path: '*',
		element: <Error />
	}*/
]);

//@ts-ignore;
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
  </StrictMode>
);
