import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },

    {
      path: "/about",
      element: <div>
        <Navbar />
        <About />
      </div>
    },

    {
      path: "/contact",
      element: <div>
        <Navbar />
        <Contact />
      </div>
    }
  ]);
  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App