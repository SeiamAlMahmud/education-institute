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
import Notice from './pages/Notice.jsx';
import Gallary from './pages/Gallary.jsx';

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
      },
      {
        path: '/notice',
        element: <Notice />
      },
      {
        path: '/gallary',
        element: <Gallary />
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
