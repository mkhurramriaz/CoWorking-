import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // This is the correct import for React 18+
import App from './App.jsx';
import Home from './Components/Home.jsx';
import Layout from './Layout.jsx';
import About from './Components/About.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact.jsx';
import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './Components/Services.jsx';
import Chectout from './Components/Chectout.jsx';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route 
      path='services' 
      element={<Services />}
       />
       <Route
       path='checkout'
       element={<Chectout/>}
       />

 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
