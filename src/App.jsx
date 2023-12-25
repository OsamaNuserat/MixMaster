import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Landing,
  Newsletter,
  About,
  Cocktail,
  Error,
  HomeLayout,
} from "./Components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  }, 
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
