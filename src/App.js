import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
]);


export const App = () => <RouterProvider router={router} />;
