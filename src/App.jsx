import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Team from './Pages/Teams/Team';
import Faculty from './Pages/Teams/Faculty';
import Member from './Pages/Teams/Members';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Review from './Pages/Reviews/Review';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'review',
        element: <Review/>,
      },
      {
        path: 'contact',
        element:<Contact/>,
      },
      {
        path: 'faculty',
        element: <Faculty />,
      },
      {
        path: 'member',
        element: <Member />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={route} />
}

export default App
