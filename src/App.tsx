import './App.css';
import { MainLayout }  from './components/mainLayout/MainLayout';
import { UserContextProvider } from './components/context/UserContext';

export function App() {

  return (
    <>
      <UserContextProvider>
        <MainLayout />
      </UserContextProvider>
    </>
  );
};

