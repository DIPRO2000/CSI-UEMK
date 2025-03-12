import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Team from './Pages/Teams/Team'
import Gallery from './Pages/Gallery/Gallery'

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
        {
          path:"/gallery",
          element:<Gallery/>
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
