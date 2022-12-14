import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/Page2",
    element: <Page2/>,
  },
  {
    path: "/Page3",
    element: <Page3/>,
  },
  {
    path: "/Page4",
    element: <Page4/>,
  },
  {
    path: "/Page5",
    element: <Page5/>,
  },
  {
    path: "/Page6",
    element: <Page6/>,
  }
]);


export const App = () => <RouterProvider router={router} />;
