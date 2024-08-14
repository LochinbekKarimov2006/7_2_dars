import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import "./App.css"
import MainLeaut from './layout/MainLeaut'
import Home from './pages/Home'
import Abaut from './pages/Abaut'
import Goloreya from './pages/Goloreya'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MainLeaut/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/abaut",
          element:<Abaut/>
        },
        {
          path:"/goloreya",
          element:<Goloreya/>
        },
      ]
    }
  ])
  return (
     <>
     <RouterProvider router={router}/>
     </>
  )
}

export default App