import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './pages/Home.tsx';
import Signup from './pages/Signup.tsx';
import Blogs from './pages/Blogs.tsx';
import CreateBlog from './pages/createBlog.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Signup />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/createBlog",
        element: <CreateBlog />
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
