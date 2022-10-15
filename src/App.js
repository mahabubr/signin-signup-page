import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
