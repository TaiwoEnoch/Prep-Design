import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import TopBar from './components/TopBar';
import Home from './components/Navigations/Home/Home'
import Nav from './components/Navigations/Nav';
import Messages from './components/Navigations/Messages';
import Create from './components/Navigations/Create';
import Profile from './components/Navigations/Profiles'
import PageNotFound from './components/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <TopBar/>
        <Home/>
        <Nav/>
      </>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: '/messages',
    element: (
      <>
        <TopBar/>
        <Messages />
        <Nav/>
      </>
    ),
  },
  {
    path: '/create',
    element: (
      <>
        <TopBar/>
        <Create />
        <Nav/>
      </>
    ),
  },
  {
    path: '/profiles',
    element: (
      <>
        <TopBar/>
        <Profile />
        <Nav/>
      </>
    ),
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
