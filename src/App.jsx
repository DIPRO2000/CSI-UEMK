import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home/Home'

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
