import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import TopBar from './components/TopBar';
import Home from './components/Navigations/Home/Home';
import Nav from './components/Navigations/Nav';
import Messages from './components/Navigations/Messages';
import Create from './components/Navigations/Create';
import Profile from './components/Navigations/Profiles';
import PageNotFound from './components/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <Home />
        </div>
        <Nav />
      </div>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: '/messages',
    element: (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <Messages />
        </div>
        <Nav />
      </div>
    ),
  },
  {
    path: '/create',
    element: (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <Create />
        </div>
        <Nav />
      </div>
    ),
  },
  {
    path: '/profiles',
    element: (
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <Profile />
        </div>
        <Nav />
      </div>
    ),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
