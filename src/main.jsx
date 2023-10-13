import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './component/Main';
import Phones from './component/Phones';
import Phone from './component/Phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: '/phones',
    element:<Phones></Phones>,
    loader: () => fetch('http://localhost:5000/phones/')
  },
  {
    path: '/phone/:id',
    element:<Phone></Phone>,
    loader:({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
