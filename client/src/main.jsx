import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.jsx'
import './index.css'
import EduContext from './context/EduContext.jsx';
import Root from './Foundation/Root.jsx';
import ErrorPage from './Foundation/ErrorPage.jsx';
import Homepage from './pages/Homepage.jsx';
import ContactForm from './pages/ContactForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/contact',
        element: <ContactForm />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EduContext>
      <ThemeProvider>
    <RouterProvider router={router} />
      </ThemeProvider>
    </EduContext>
  </StrictMode>,
)
