import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Team from './Pages/Teams/Team'

function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/team",
          element:<Team/>
        },
      ]
    }
  ])  

  return (
    <>
      <RouterProvider router={route}/>
    </> 
  )
}

export default App
