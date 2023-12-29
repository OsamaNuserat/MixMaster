import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Landing,
  Newsletter,
  About,
  Cocktail,
  Error,
  HomeLayout,
  SinglePageError
} from "./Pages";

import { loader as landingLoader } from "./Pages/Landing";
import {loader as singleCocktailLoader} from './Pages/Cocktail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: landingLoader , errorElement: <SinglePageError />},
      { path: "newsletter", element: <Newsletter /> },
      { path: "cocktail/:id", element: <Cocktail /> , errorElement: <SinglePageError /> , loader : singleCocktailLoader },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
