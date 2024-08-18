import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { createBrowserRouter, Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import PageLayout from "./PageLayout.jsx"
import Work from './Work.jsx'
import Contact from './Contact.jsx'


//create the browserRouter component
const router = createBrowserRouter(
  createRoutesFromElements(
    //this route renders the base element where other elements can be rendered in it as outlets
    
    <Route path='/' element={<PageLayout />}>
      <Route index path="/" element={<Home />} />
      <Route index path="projects" element={<Work />} />
      <Route index path="contact" element={<Contact />} />
      

    </Route>

  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )